import * as React from "react";
import File from "../../icon/File";
import Upload from "../../icon/Upload";
import formatDate from "../../utils/index";
import { FilesEntitas } from "../../entitas/index";
import { useDispatch } from "react-redux";
import { addProof } from "../../store/slices";

const Proof: React.FunctionComponent = () => {
  const fileUpload = React.useRef(null);
  const dispatch = useDispatch();

  const onBrowse = () => {
    fileUpload.current.click();
  };

  const onUpload = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      onStoreFile(e.target.files[i]);
    }
  };

  const setDragAndDrop = (e: any, value: boolean) => {
    e.preventDefault();
  };

  const onSubmitDrag = (e: any) => {
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      onStoreFile(e.dataTransfer.files[i]);
    }
  };

  const onStoreFile = (file: any) => {
    fileUpload.current.value = null;
    const newFile: FilesEntitas = {
      uuid: new Date().getTime(),
      title: file.name,
      extension: file.name.split(".").pop(),
      size: file.size,
      file: URL.createObjectURL(file),
      date: formatDate(new Date()),
    };
    dispatch(addProof(newFile));
  };

  return (
    <div
      className="proof"
      onDragOver={(e) => setDragAndDrop(e, true)}
      onDragLeave={(e) => setDragAndDrop(e, true)}
      onDrop={(e) => onSubmitDrag(e)}
    >
      <File />
      <div className="proof__title red-color">Proof of Payment</div>
      <div className="proof__desc gray-color">
        Upload or drag and drop your file.
      </div>
      <div className="proof__button">
        <button onClick={onBrowse}>
          <div className="proof__button___content">
            <Upload />
            Upload
          </div>
        </button>
        <input
          type="file"
          ref={fileUpload}
          onChange={onUpload}
          multiple
          className="proof__button___upload"
        />
      </div>
    </div>
  );
};

export default Proof;
