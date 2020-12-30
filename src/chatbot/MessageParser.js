class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

      if (lowercase.includes("hello") || (lowercase.includes("hi") || (lowercase.includes("xin chao")) )) {
        this.actionProvider.greet();
      }

      else if (lowercase.includes("dien tich trai dat") || lowercase.includes("dien tich cua trai dat") || lowercase.includes("dien tich be mat trai dat") || lowercase.includes("dien tich the gioi") || lowercase.includes("dien tich be mat the gioi")) {
        this.actionProvider.dientichtraidat();
      }

      else if (lowercase.includes("khoang cach tu trai dat den mat trang") || lowercase.includes("tu trai dat den mat trang bao nhieu km") || lowercase.includes("tinh khoang cach tu trai dat den mat trang") || lowercase.includes("tinh khoang cach tu mat trang den trai dat")) {
        this.actionProvider.khoangcachtraidatmattrang();
      }

      else if (lowercase.includes("dien tich viet nam") || lowercase.includes("dien tich be mat viet nam") || lowercase.includes("dien tich cua viet nam")) {
        this.actionProvider.dientichvietname();
      }
      else if (lowercase.includes("co bao nhieu tinh thanh") || lowercase.includes("co bao nhieu tinh o viet nam") || lowercase.includes("cac tinh o viet nam")) {
        this.actionProvider.tinhthanh();
      }
      else if (lowercase.includes("mat troi") || lowercase.includes("nhiet do mat troi") || lowercase.includes("dien tich cua mat troi") || lowercase.includes("dien tich mat troi") || lowercase.includes("nhiet do cua mat troi")) {
        this.actionProvider.mattroi();
      }
      else if (lowercase.includes("mat trang") || lowercase.includes("khoang cach mat trang") || lowercase.includes("dien tich mat trang") || lowercase.includes("khoi luong mat trang") || lowercase.includes("trong luc mat trang")) {
        this.actionProvider.mattrang();
      }
      else if (lowercase.includes("sao hoa") || lowercase.includes("dien tich sao hoa") || lowercase.includes("khoi luong sao hoa") || lowercase.includes("khoang cach soa hoa") || lowercase.includes("trong luc sao hoa")) {
        this.actionProvider.saohoa();
      }
      else if (lowercase.includes("sao thien vuong") || lowercase.includes("dien tich sao thien vuong") || lowercase.includes("khoi luong thien vuong") || lowercase.includes("dien tich cua sao thien vuong") || lowercase.includes("trong luc cua sao thien vuong")) {
        this.actionProvider.saothienvuong();
      }
      else if (lowercase.includes("sao kim") || lowercase.includes("dien tich sao kim") || lowercase.includes("khoi luong sao kim") || lowercase.includes("dien tich cua sao kim") || lowercase.includes("khoang cach cua sao kim")) {
        this.actionProvider.saokim();
      }
      else if (lowercase.includes("loai nguoi co don doc khong") || lowercase.includes("loai nguoi") || lowercase.includes("nguoi ngoai hanh tinh")  || lowercase.includes("ngoai trai dat co hanh tinh nao co su song khong")) {
        this.actionProvider.vutru();
      }
      else if (lowercase.includes("vu tru lon the nao") || lowercase.includes("vu tru rong lon the nao") || lowercase.includes("vu tru") || lowercase.includes("co bao nhieu hanh tinh ngoai vu tru")) {
        this.actionProvider.dolonvutru();
      }
      else if (lowercase.includes("what is your name") || lowercase.includes("who are you")) {
        this.actionProvider.myname();
      }

      
      else if (lowercase.includes("kham pha the gioi") || lowercase.includes("khi hau dia trung hai")) {
        this.actionProvider.handleJavascriptQuiz();
      }
      else if (lowercase.includes("nhung loai vat tien su") || lowercase.includes("the gioi tien su")) {
        this.actionProvider.handlePythonQuiz();
      }
      else if (lowercase.includes("Golang") || lowercase.includes("js")) {
        this.actionProvider.handleGolangQuiz();
      }
      else {
        this.actionProvider.unknownQuestion();
      }


    }

}

export default MessageParser;
