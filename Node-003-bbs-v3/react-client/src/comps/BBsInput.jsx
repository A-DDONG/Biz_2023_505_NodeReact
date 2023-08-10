import { useState, useRef } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview";
import { bbsInsert } from "../modules/FetchModule";
import css from "../css/BBsInput.module.css";
const BBsInput = () => {
  const [bbs, setBBs] = useState({
    b_seq: 0,
    b_nickname: "",
    b_title: "",
    b_content: "",
  });
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const imgRef = useRef(null);
  const imgsRef = useRef(null);

  const setMainImage = (image) => {
    setImage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="100px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });
  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);
    // console.log(imgSrc);
    setImage(imgSrc);
  };

  const filesChangeHandler = async (e) => {
    const files = e.target.files;
    const imgSrcList = await Promise.all(filesPreview(files));
    // console.log(imgSrcList.length);
    // console.log(imgSrcList[0]);
    setImages(imgSrcList);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBBs({ ...bbs, [name]: value });
  };
  /**
   * fetch 를 통해서 서버로 데이터, 이미지를 전송하기
   * 1. formData 만들기
   * 2. formData 에 각 데이터들 append
   * 3. fetch 보내기
   */
  const insertButtonClickHandler = async () => {
    // alert("Hello");
    // js 에서 제공하는 Http 객체
    const formData = new FormData();
    const file = imgRef?.current.files[0];
    const files = imgsRef.current.files;
    // formData 에 bbs(JSON 객체)를 실어서 서버로 보낼때는 객체를 직접 보낼 수 없다
    // 객체를 Serialize(직렬화, 문자열화)
    const bbsStr = JSON.stringify(bbs);

    // node 의 router Upload 미들웨어에서 받을 이름
    // 모든 파일 정보를 append()
    // 대표이미지
    formData.append("b_images", file);
    // 갤러리 이미지들
    for (let file of files) {
      formData.append("b_images", file);
    }
    formData.append("bbs", bbsStr);
    // formData.append("bbs", bbs);
    // document.querySelector("#b_img").files[0]
    // formData.append("b_img", imgRef.current.files[0]);
    // formData.append("b_nickname", bbs.b_nickname);
    // formData.append("b_title", bbs.b_title);
    // formData.append("b_content", bbs.b_content);
    console.log(bbs, formData);
    await bbsInsert(formData);
  };

  return (
    <section className={css.main}>
      <div className={css.input_container}>
        <div>
          <label>작성자</label>
          <input
            name="b_nickname"
            placeholder="작성자"
            value={bbs.b_nickname}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>제목</label>
          <input
            name="b_title"
            placeholder="제목"
            value={bbs.b_title}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>내용</label>
          <input
            name="b_content"
            placeholder="내용"
            value={bbs.b_content}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={css.image_box}>
        <div>
          <label htmlFor="main_image">대표이미지를 선택하세요</label>
          <input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            ref={imgRef}
            // React 에서 각 요소의 Key 역할을 하는 속성
          />
          <div className={css.thumb}>
            <img src={image ? image : ""} width="100px" />
          </div>
        </div>
        <div>
          <label htmlFor="gallery_image">갤러리 이미지를 선택하세요</label>
          <input
            id="gallery_image"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={filesChangeHandler}
            ref={imgsRef}
          />
          <div className={css.thumb}>{thumbImages}</div>
        </div>
        <div className={css.button}>
          <button onClick={insertButtonClickHandler}>저장</button>
        </div>
      </div>
      <div className="view"></div>
    </section>
  );
};

export default BBsInput;
