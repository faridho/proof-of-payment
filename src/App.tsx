import * as React from "react";
import File from "./icon/File";
import Upload from "./icon/Upload";
import Extension from "./icon/Extendsion";
import Close from "./icon/Close";
import "./style.css";



const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <div className="proof">
            <File />
            <div className="proof__title red-color">Proof of Payment</div>
            <div className="proof__desc gray-color">
              Upload or drag and drop your file.
            </div>
            <div className="proof__button">
              <button>
                <div className="proof__button___content">
                  <Upload />
                  Upload
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="list">
            <div className="list__ava">
              <Extension />
              <p className="list__ava___text">Pdf</p>
            </div>
            <div className="list__desc gray-color">
              <div className="list__desc___name">
              upload-svgrepo-com
              </div>
              <div className="list__desc___timing">
                22 August 2022 15:45
              </div>
            </div>
            <div className="list__close">
              <Close />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
