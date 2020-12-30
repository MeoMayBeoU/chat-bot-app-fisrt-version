import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import casau from "../components/image/casau.jpg"
import camap from "../components/image/camaptiensu.jpg"
import cabocthep from "../components/image/cabocthep.jpg"
import tran from "../components/image/trantiensu.jpg"
import bocap from "../components/image/bocaptiensu.jpg"
import ret from "../components/image/rettiensu.jpg"
import bo from "../components/image/botiensu.jpg"
import caanthit from "../components/image/caanthit.jpg"
import muc from "../components/image/muckhonglo.jpg"

const config = {
  botName: "My bot",
  initialMessages: [
    createChatBotMessage(`Xin Chào , bạn muốn tìm hiểu về chủ đề gì ? - hãy thử với các từ khóa như " mat troi , mat trang , nguoi ngoai hanh tinh , dien tich viet nam , sao kim , co bao nhieu tinh o viet nam , sao hoa , sao thien vuong , vu tru lon the nao... hoặc khám phá thế giới cùng với tôi ^^`, {
      widget: "options",
    }),
  ],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Khí hậu Địa Trung Hải có những đặc điểm gì? Những nơi nào trên thế giới có loại khí hậu này?",
            answer:
              "Loại khí hậu ở đây có đặc điểm là: mùa đông ấm áp nhiều mưa, còn mùa hạ nóng nực và khô khan, trời luôn luôn trong xanh, nhiều nắng..",
            id: 1,
          },
          {
            question: "Trên Trái Đất nơi nào nóng nhất, nơi nào lạnh nhất?",
            answer:
              "ở thung lũng “Thần Chết” (thuộc bang Caliphoócnia – Hoa Kì), nhiệt độ không khí ban ngày lên tới 56,70C. Thời đó, người ta cho đây là nơi nóng nhất địa cầu.",
            id: 2,
          },
          {
            question: "Đỉnh núi cao nhất thế giới ở trên dãy Himalaya là đỉnh Êvơrét hay Chômôlungma.  ",
            answer:
              "Đỉnh núi cao nhất trên dãy Himalaya theo tiếng địa phương (Tây Tạng) là Chômôlungma, có nghĩa là “Thánh mẫu”.",
            id: 3,
          },
          {
            question: "Tại sao quần đảo Haoai nằm ở giữa Thái Bình Dương lại là một bang thuộc lãnh thổ Hoa Kì? Bang này được sáp nhập vào liên bang từ bao giờ?",
            answer:
              "Có thể nói quần đảo Haoai có vị trí trung gian giữa 3 châu lục Á, Mĩ và Ôxtrâylia. Khoảng cách từ Hônôlulu đến các cảng Xan Phranxixcô (Hoa Kì) hay đến Iôcôhama (Nhật) hoặc Brixban (Ôxtrâylia) đều vào khoảng trên dưới 7000 km.",
            id: 4,
          },
        ],
      },
      
    },
    {
      widgetName: "handlePythonQuiz",
      widgetFunc: (props) => <Quiz {...props} />, 
      props: {
        questions: [
          {
            question: "Cá Sấu Khổng Lồ Tiền Sử",
            answer:
              <div><img  src={casau} /> <p>Cá sấu khổng lồ sở hữu hàm răng vô cùng sắc nhọn và mạnh mẽ. Chúng sống ở vùng Nam Mỹ khoảng 8 triệu năm về trước với chiều dài từ 12-15 mét và khối lượng gần 10 tấn. "Quái vật đầm lầy" có thể nghiền nát mọi thứ, kể cả lớp da cứng như thép hay khủng long bạo chúa T-Rex.</p></div> ,
            id: 1,
          },
          {
            question: "Cá Mập Khổng Lồ Tiền Sử",
            answer:
              <div><img  src= {camap} /> <p>
              
              Không chỉ có kích thước lớn, nhiều động vật còn là sát thủ đáng gờm chuyên săn và ăn thịt cá voi và khủng long thời tiền sử.
              Cá sấu khổng lồ sở hữu hàm răng vô cùng sắt nhọn và mạnh mẽ. Chúng sống ở vùng Nam Mỹ khoảng 8 triệu năm về trước với chiều dài từ 12-15 mét, và nặng gần 10 tấn. Quái vật đầm lầy to lớn này có thể nghiền nát mọi thứ kể cả lớp da cứng như thép, thậm chí cả khủng long bạo chúa T-Rex.
              Cá sấu khổng lồ sở hữu hàm răng vô cùng sắc nhọn và mạnh mẽ. Chúng sống ở vùng Nam Mỹ khoảng 8 triệu năm về trước với chiều dài từ 12-15 mét và khối lượng gần 10 tấn. "Quái vật đầm lầy" có thể nghiền nát mọi thứ, kể cả lớp da cứng như thép hay khủng long bạo chúa T-Rex.
              Cá mập Megalodon trưởng thành đạt chiều dài tối đa 20 mét, riêng răng của nó đã là 18cm. Loài cá mập này sống khoảng 28 triệu năm về trước. Thức ăn của Megalodon là cá voi hay cá nhà táng hay thậm chí là những con khủng long ăn thực vật khổng lồ.
              Thân cá mập Megalodon trưởng thành có thể đạt chiều dài tối đa 20 mét, còn chiều dài răng là 18 cm. Chúng sống khoảng 28 triệu năm về trước. Thức ăn của Megalodon là cá voi, cá nhà táng hay thậm chí là những con khủng long khổng lồ.</p></div> ,
            id: 2,
          },
          {
            question: "Cá Bọc Thép Tiền Sử",
            answer:
              <div><img  src= {cabocthep} /> <p>

Toàn thân cá bọc thép Dunkleosteus được bao phủ bởi các tấm xương rắn như thép. Cơ thể chúng có chiều dài tới 10 mét và khối lượng khoảng 4 tấn. Chúng không có răng nhưng sở hữu hai bản xương sắc bén, hình thành một cấu trúc như mỏ chim để xé xác mọi chúng gặp. Thậm chí chúng còn ăn thịt đồng loại.</p></div> ,
            id: 3,
          },
          {
            question: "Trăn Khổng Lồ",
            answer:
              <div><img  src= {tran} /> <p>

Trăn Titanoboa đạt chiều dài tối đa 15 mét và khối lượng tới 1.200 kg. Chúng sống ở vùng khí hậu ấm áp của vùng nhiệt đới cách đây 60 triệu năm trước. Titanoboa rất hung hăng và sẵn sàng nuốt những con mồi mà chúng thấy, kể cả những con có kích thước lớn hơn.</p></div> ,
            id: 4,
          },
          {
            question: "Bọ cạp khổng lồ",
            answer:
              <div><img  src= {bocap} /> <p>

Bọ cạp Pulmonoscorpius rất giống với đồng loại thời hiện đại, với móng vuốt phía trước và một cái đuôi có độc. Chiều dài thân của chúng lên tới 100 cm.</p></div> ,
            id: 5,
          },
          {
            question: "Rết tiền sử",
            answer:
              <div><img  src= {ret} /> <p>

Arthropleura giống như động vật nhiều chân ngày nay nhưng chiều dài của chúng lên tới 200 cm. Mỗi chân của chúng có chiều dài đến 76 cm và khối lượng của những con to có thể lên tới nửa tấn.</p></div> ,
            id: 6,
          },
          {
            question: "bọ khổng lồ",
            answer:
              <div><img  src= {bo} /> <p>

Jaekelopterus có chiều dài 2,5 mét và sống trong môi trường nước ngọt. Khi đối phương xuất hiện trước mặt, nó sẽ lảo đảo về phía trước và xé con mồi thành từng mảnh.</p></div> ,
            id: 7,
          },
          {
            question: "Cá Ăn Thịt khổng lồ",
            answer:
              <div><img  src= {caanthit} /> <p>
Cá Piranha khổng lồ tồn tại khoảng 8 - 10 triệu năm trước. Chiều dài thân của chúng lên tới một mét, lớn gấp 3 lần so với loài piranha ngày nay.</p></div> ,
            id: 8,
          },
        ],
      },
    },
    {
      widgetName: "handleGolangQuiz",
      widgetFunc: (props) => <Quiz {...props} />, 
      props: {
        questions: [
       
        ],
      },
    },
  ],


};

export default config;
