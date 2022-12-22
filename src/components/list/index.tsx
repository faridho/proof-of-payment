import * as React from "react";
import Extension from "../../icon/Extendsion";
import Close from "../../icon/Close";
import { useDispatch, useSelector } from "react-redux";
import { selectProof, removeProof } from "../../store/slices";
import { FilesEntitas } from "../../entitas/index";

const List: React.FunctionComponent = () => {
  const allFiles = useSelector(selectProof);
  const dispatch = useDispatch();

  const filesRender = allFiles.map((item: FilesEntitas, index: number) => (
    <div className="list" key={index}>
      <div className="list__ava">
        <Extension />
        <p className="list__ava___text">{item.extension}</p>
      </div>
      <div className="list__desc gray-color">
        <div className="list__desc___name">{item.title}</div>
        <div className="list__desc___timing">{item.date}</div>
      </div>
      <div className="list__close" onClick={() => removeFile(item)}>
        <Close />
      </div>
    </div>
  ));

  const removeFile = (item: FilesEntitas) => {
    dispatch(removeProof(item));
  };

  return <div>{filesRender}</div>;
};

export default List;
