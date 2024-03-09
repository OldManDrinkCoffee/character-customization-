import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";
import { Title } from "./components/Title";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrow] = useState(2);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [glasses, setGlasses] = useState(2);

  // const [avatar, setAvatar] = useState({
  //   body: 0,
  //   eyes: 2,
  //   eyebrows: 2,
  //   hair: 0,
  //   clothing1: 0,
  //   clothing2: 0,
  //   clothing3: 0,
  //   mouth: 2,
  //   glasses: 2,
  // }); // Batch update

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));

    /// Batch update: v17 , v18
    // v16
    // setAvatar(prev => ({
    //   ...prev,
    //   body: Math.floor(Math.random() * total.body),
    //   eyes: Math.floor(Math.random() * total.eyes),
    // }))

  };

  // const onChange = (field) => {
  //   return (value) => {
  //     setAvatar(prev => ({ ...prev, [field]: value }))
  //   }
  // }

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div className="avatar-area">
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouth={mouth}
              eyebrow={eyebrows}
              glasses={glasses}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="list-section">
            <Title>Body</Title>
            <PartList
              total={total.body}
              path="body"
              // set={onChange("body")}
              set={setBody}
              selected={body}
            />
          </div>
          <div className="list-section">
            <Title>Eyes</Title>
            <PartList
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
              zoom={2.5}
              top="35px"
            />
          </div>
          <div className="list-section">
            <Title>Hair</Title>
            <PartList
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="list-section">
            <Title>Mouth</Title>
            <PartList
              total={total.mouth}
              path="mouths"
              set={setMouth}
              selected={mouth}
              zoom={2}
            />
          </div>
          <div className="list-section">
            <Title>Eyebrows</Title>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrow}
              selected={eyebrows}
            />
          </div>
          <div className="list-section">
            <Title>Glasses</Title>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="list-section">
            <Title>Clothing (L1)</Title>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className="list-section">
            <Title>Clothing (L2)</Title>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className="list-section">
            <Title>Clothing (L3)</Title>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
              zoom={2}
              top="-15px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
