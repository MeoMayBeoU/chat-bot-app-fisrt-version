import sorry from "../components/image/sorry-note-rex.jpg";
import traidat from "../components/image/trai-dat-1024x640.jpg";
import saokim from "../components/image/1200px-Venus_globe.jpg";
import vutru from "../components/image/vutru.jpg";
import nguoingoaihanhtinh from "../components/image/neu-ton-tai-nguoi-ngoai-hanh-tinh-sex-the-nao-hinh-9.jpg";
import vietnam from "../components/image/meaning-of-vietnam.jpg";
import mattrang from "../components/image/matrang.jpg";
import saothienvuong from "../components/image/14b3010201003Uranus.jpg"
import mattroi from "../components/image/mattroi.jpg"
import mybot from "../components/image/chatbot.jpg"
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage(<div>Hello friend.</div>);
    this.addMessageToState(message);
  };
  myname = () => {
    const message = this.createChatBotMessage(<div> <img  src={mybot} /> My name is bot ! i can help you ?.</div>);
    this.addMessageToState(message);
  };
  dientichtraidat = () => {
    const message = this.createChatBotMessage(<div> <img  src={traidat} /> Diện tích bề mặt Trái Đất 510.100.000 km².</div>);
    this.addMessageToState(message);
  };
  dientichvietname = () => {
    const message = this.createChatBotMessage(<div> <img  src={vietnam} />Diên tích bề mặt Việt Nam 331.212 km² .</div>);
    this.addMessageToState(message);
    
  };
  tinhthanh = () => {
    const message = this.createChatBotMessage(<div> <img  src={vietnam} /> Việt Nam có 63 tỉnh thành</div>);
    this.addMessageToState(message);
  };
  khoangcachtraidatmattrang = () => {
    const message = this.createChatBotMessage(<div> <img  src={mattrang} /> Khoảng cách từ trái đất đến mặt trăng là 384.400 km</div>);
    this.addMessageToState(message);
  };
  mattroi = () => {
    const message = this.createChatBotMessage(<div> <img  src={mattroi} /> <p>Khoảng cách tới Trái đất: 149.600.000 km</p>  <p>Nhiệt độ bề mặt: 5.778 K</p> <p>Khối lượng: 1,989E30 kg</p> <p>Mật độ: 1,41 g/cm³</p>  <p>Tuổi: 4,603E9 tuổi</p> </div>);
    this.addMessageToState(message);
  }
  mattrang = () => {
    const message = this.createChatBotMessage(<div> <img  src={mattrang} /> <p>Khoảng cách tới Trái đất: 384.400 km</p>  <p>Mật độ: 3,34 g/cm³</p> <p>Bán kính: 1.737,1 km</p> <p>Trọng lực: 1,62 m/s²</p>  <p>Tuổi: 4,53E9 tuổi</p> </div>);
    this.addMessageToState(message);
  }
  saohoa = () => {
    const message = this.createChatBotMessage(<div> <img  src={saokim} /> <p>Kinh độ của điểm nút lên: 49,562°</p>  <p>Vệ tinh tự nhiên: 2</p> <p>Bán kính: 1.737,1 km</p> <p>Acgumen của cận điểm: 286,537°</p>  <p>Hấp dẫn bề mặt: 3,711 m/s²; 0,376 g</p> </div>);
    this.addMessageToState(message);
  }
  saomoc = () => {
    const message = this.createChatBotMessage(<div> <p>Diện tích bề mặt: 6,142E10 km²</p>  <p>Bán kính: 69.911 km</p> <p>Bán kính: 1.737,1 km</p> <p>Khối lượng: 1,898E27 kg (317,8 M⊕)</p>  <p>Mật độ: 1,33 g/cm³</p> </div>);
    this.addMessageToState(message);
  }
  saokim = () => {
    const message = this.createChatBotMessage(<div> <img  src={saothienvuong} /> <p>Kinh độ của điểm nút lên: 76,678°</p>  <p>Acgumen của cận điểm: 55,186°</p> <p>Áp suất khí quyển bề mặt: 92 bar (9,2 MPa)</p> <p>Vận tốc quay tại xích đạo: 6,52 km/h (1,81 m/s)</p>  <p>Hấp dẫn bề mặt: 8,87 m/s2; 0,904 g</p> </div>);
    this.addMessageToState(message);
  }
  saothienvuong = () => {
    
    const message = this.createChatBotMessage(<div>  <p>Bán kính: 25.362 km</p>  <p>Mật độ: 3,34 g/cm³</p> <p>Diện tích bề mặt: 8,083E9 km²</p> <p>Mật độ: 1,27 g/cm³</p>  <p>Khoảng cách từ Mặt trời: 2,871E9 km</p> </div>);
    this.addMessageToState(message);
  }
  vutru = () => {
    const message = this.createChatBotMessage(<div><img  src={nguoingoaihanhtinh} />  Các nhà khoa học cho rằng vũ trụ có thể bao gồm nhiều hệ hành tinh khác nhau. Những hệ hành tinh này có thể tồn tại sự sống thông minh như loài người trên Trái đất. Mặc dù vậy, chúng ta chưa phát triển được những công nghệ hiện đại có khả năng vượt qua hàng triệu năm ánh sáng để liên hệ với người ngoài hành tinh.</div>);
    this.addMessageToState(message);
  }
  dolonvutru = () => {
    const message = this.createChatBotMessage(<div> <img  src={vutru} />Một số nhà thiên văn học tin rằng không có giới hạn về độ lớn của vũ trụ. Trong khi, một số nhà thiên văn học khác lại cho rằng từ sau vụ nổ Big Bang, vũ trụ đã mở rộng với đường kính khoảng 150 tỷ năm ánh sáng.  </div>)
    this.addMessageToState(message);
  }
  unknownQuestion = () => {

    const message = this.createChatBotMessage( <div> <img  src={sorry} /> Xin lỗi ! vui lòng nhập lại câu hỏi !!</div>)
    this.addMessageToState(message);
  }



  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Bắt Đầu Nào !!! Đây là chủ đề về thế giới !",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handlePythonQuiz = () => {
    const message = this.createChatBotMessage(
      "Chào mừng đến thế giới tiền sử !",
      {
        widget: "handlePythonQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handleGolangQuiz = () => {
    const message = this.createChatBotMessage(
      "Coming Soon",
      {
        widget: "handleGolangQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
