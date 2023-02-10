import React, { useState } from "react";
import "./Nav.css";
import { categories } from "../utils/data";
import Loader from "./Loader";
import upload from "../images/upload.png";
import { storage } from "./firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState(null);
  const [Productname, setProductName] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [price, setprice] = useState("");

  const uploadimage = (e) => {
    setLoading(true);

    const Imagefile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${Imagefile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, Imagefile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadpro =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        setLoading(false);
        console.log(error);

        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="outlined" severity="warning">
            This is a warning alert — check it out!
          </Alert>
        </Stack>;
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((downlodeurl) => {
          setImageAsset(downlodeurl);
          setLoading(false);
          console.log(downlodeurl);
        });
      }
    );
  };

  const delectimg = () => {};
  const savedetails = () => {};
  return (
    <>
      <div className="container2">
        <div className="createinp">
          <input
            type="text"
            value={title}
            placeholder="Give me titile"
            onChange={(e) => setTitle(e.target.value)}
            className="inptext"
          />
        </div>
        <div className="createselect">
          <select
            className="selectop"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="other" className="bg-white">
              Select categories
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none bg-white"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="uploadimgmain">
          <div className="uploadimg">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <img className="uploadimgcenter" src={upload} />
                    <label className="clickupload">Click here to upload</label>
                    <input
                      type="file"
                      name="upladimages"
                      accept="images/*"
                      onChange={uploadimage}
                      className="w-0 h-0"
                    />
                  </>
                ) : (
                  <>
                    <img src={imageAsset} alt="uploaded images" />
                    <button onClick={delectimg} className="deleimg">
                      Delect image
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div className="createinp">
          <input
            type="text"
            value={Productname}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder="Product Name"
            className="inptext"
          />
        </div>
        <div className="createinp">
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
            placeholder="Product Price"
            className="inptext"
          />
        </div>
        <div>
          <button className="createbutton1" type="button">
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};
export default CreateItem;
