
import { Question } from '../types';

export const mathBasicQuestions: Question[] = [
  { id: 1, question: "1 + 2 bằng mấy?", options: ["2", "3", "4"], correctAnswer: 1 },
  { id: 2, question: "5 - 3 bằng mấy?", options: ["2", "1", "3"], correctAnswer: 0 },
  { id: 3, question: "10 + 5 bằng mấy?", options: ["14", "15", "16"], correctAnswer: 1 },
  { id: 4, question: "8 - 4 bằng mấy?", options: ["4", "3", "2"], correctAnswer: 0 },
  { id: 5, question: "Số nào lớn nhất: 7, 3, 9?", options: ["7", "3", "9"], correctAnswer: 2 },
  { id: 6, question: "Số nào nhỏ nhất: 2, 5, 1?", options: ["2", "5", "1"], correctAnswer: 2 },
  { id: 7, question: "7 + 3 bằng mấy?", options: ["9", "10", "11"], correctAnswer: 1 },
  { id: 8, question: "9 - 2 bằng mấy?", options: ["7", "6", "5"], correctAnswer: 0 },
  { id: 9, question: "4 + 4 bằng mấy?", options: ["7", "8", "9"], correctAnswer: 1 },
  { id: 10, question: "6 - 0 bằng mấy?", options: ["0", "6", "1"], correctAnswer: 1 },
  { id: 11, question: "12 + 3 bằng mấy?", options: ["14", "15", "16"], correctAnswer: 1 },
  { id: 12, question: "15 - 5 bằng mấy?", options: ["10", "11", "12"], correctAnswer: 0 },
  { id: 13, question: "Số 'Mười tám' viết là gì?", options: ["10", "18", "81"], correctAnswer: 1 },
  { id: 14, question: "Số liền sau của số 9 là số nào?", options: ["8", "10", "11"], correctAnswer: 1 },
  { id: 15, question: "Số liền trước của số 5 là số nào?", options: ["4", "6", "3"], correctAnswer: 0 },
  { id: 16, question: "20 - 10 bằng mấy?", options: ["5", "10", "15"], correctAnswer: 1 },
  { id: 17, question: "7 + 7 bằng mấy?", options: ["13", "14", "15"], correctAnswer: 1 },
  { id: 18, question: "11 + 9 bằng mấy?", options: ["19", "20", "21"], correctAnswer: 1 },
  { id: 19, question: "13 - 3 bằng mấy?", options: ["10", "9", "11"], correctAnswer: 0 },
  { id: 20, question: "5 + 5 + 5 bằng mấy?", options: ["10", "15", "20"], correctAnswer: 1 }
];

export const mathLogicQuestions: Question[] = [
  { id: 1, question: "Tiếp theo của 2, 4, 6 là số nào?", options: ["7", "8", "10"], correctAnswer: 1 },
  { id: 2, question: "Hình vuông có mấy góc vuông?", options: ["3", "4", "5"], correctAnswer: 1 },
  { id: 3, question: "Con mèo có 4 chân, 2 con mèo có mấy chân?", options: ["4", "6", "8"], correctAnswer: 2 },
  { id: 4, question: "Quả bóng có hình gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác"], correctAnswer: 1 },
  { id: 5, question: "Quy luật: Tròn - Vuông - Tròn - ...?", options: ["Tam giác", "Vuông", "Tròn"], correctAnswer: 1 },
  { id: 6, question: "Nếu hôm nay là thứ Hai, ngày mai là thứ mấy?", options: ["Thứ Ba", "Chủ Nhật", "Thứ Tư"], correctAnswer: 0 },
  { id: 7, question: "Số nào ở giữa 14 và 16?", options: ["13", "15", "17"], correctAnswer: 1 },
  { id: 8, question: "Một bàn tay có 5 ngón, hai bàn tay có mấy ngón?", options: ["5", "10", "15"], correctAnswer: 1 },
  { id: 9, question: "Con chim bay trên trời, con cá bơi ở đâu?", options: ["Trong rừng", "Dưới nước", "Trên bờ"], correctAnswer: 1 },
  { id: 10, question: "Hình nào không có cạnh?", options: ["Hình tròn", "Hình vuông", "Hình chữ nhật"], correctAnswer: 0 }
];

export const vietnameseQuestions: Question[] = [
  { id: 1, question: "Chữ cái đầu tiên trong từ 'Bố' là gì?", options: ["B", "O", "Ô"], correctAnswer: 0 },
  { id: 2, question: "Từ nào chỉ con vật?", options: ["Cái bàn", "Con chó", "Bông hoa"], correctAnswer: 1 },
  { id: 3, question: "Từ nào viết đúng chính tả?", options: ["Học sinh", "Học xinh", "Học xing"], correctAnswer: 0 },
  { id: 4, question: "Tiếng 'Mẹ' có dấu thanh gì?", options: ["Dấu huyền", "Dấu sắc", "Dấu nặng"], correctAnswer: 2 },
  { id: 5, question: "Chữ cái nào đứng sau chữ 'A'?", options: ["Ă", "B", "C"], correctAnswer: 0 },
  { id: 6, question: "Từ nào có 2 tiếng?", options: ["Cá", "Gà", "Trường học"], correctAnswer: 2 },
  { id: 7, question: "Câu nào là câu chào hỏi?", options: ["Em đi học", "Con chào mẹ", "Em đang ăn"], correctAnswer: 1 },
  { id: 8, question: "Vần 'an' có trong từ nào?", options: ["Bàn học", "Bông hoa", "Cái ghế"], correctAnswer: 0 },
  { id: 9, question: "Tiếng nào có âm 'kh' đứng đầu?", options: ["Con cá", "Khăn quàng", "Cái ca"], correctAnswer: 1 },
  { id: 10, question: "Tên trường của bé bắt đầu bằng chữ gì?", options: ["Chữ số", "Chữ in hoa", "Dấu gạch ngang"], correctAnswer: 1 },
  { id: 11, question: "Từ 'Con voi' có mấy tiếng?", options: ["1", "2", "3"], correctAnswer: 1 },
  { id: 12, question: "Dấu thanh trong từ 'Bé' là dấu gì?", options: ["Huyền", "Sắc", "Nặng"], correctAnswer: 1 },
  { id: 13, question: "Vần 'ay' có trong từ nào?", options: ["Máy bay", "Con kiến", "Cái nồi"], correctAnswer: 0 },
  { id: 14, question: "Điền vào chỗ trống: Quả ... (chỉ quả màu đỏ)?", options: ["Khế", "Cam", "Táo"], correctAnswer: 2 },
  { id: 15, question: "Âm 'g' kết hợp với 'i' thành tiếng gì?", options: ["Ga", "Ghi", "Gò"], correctAnswer: 1 },
  { id: 16, question: "Từ nào chỉ hoạt động?", options: ["Bút chì", "Chạy bộ", "Cái cặp"], correctAnswer: 1 },
  { id: 17, question: "Từ nào là tên riêng?", options: ["Hà Nội", "Thành phố", "Đường phố"], correctAnswer: 0 },
  { id: 18, question: "Từ 'Vui vẻ' mang ý nghĩa gì?", options: ["Buồn bã", "Hạnh phúc", "Tức giận"], correctAnswer: 1 },
  { id: 19, question: "Tiếng 'Mèo' có vần gì?", options: ["eo", "ao", "oa"], correctAnswer: 0 },
  { id: 20, question: "Bộ phận nào dùng để viết bài?", options: ["Bàn tay", "Đôi chân", "Cái tai"], correctAnswer: 0 }
];

export const readingQuestions: Question[] = [
  { id: 1, question: "'Con mèo trèo cây cau'. Con gì trèo cây cau?", options: ["Con mèo", "Con chó", "Con chim"], correctAnswer: 0 },
  { id: 2, question: "'Bé đi học sớm'. Bé đi đâu?", options: ["Đi chơi", "Đi học", "Đi ngủ"], correctAnswer: 1 },
  { id: 3, question: "'Bầu trời màu xanh'. Bầu trời màu gì?", options: ["Màu đỏ", "Màu xanh", "Màu vàng"], correctAnswer: 1 },
  { id: 4, question: "'Mẹ đi chợ mua cá'. Mẹ mua gì?", options: ["Mua cá", "Mua thịt", "Mua rau"], correctAnswer: 0 },
  { id: 5, question: "'Bông hoa hồng rất thơm'. Hoa gì thơm?", options: ["Hoa cúc", "Hoa hồng", "Hoa lan"], correctAnswer: 1 },
  { id: 6, question: "'Trường học là ngôi nhà thứ hai'. Trường học là gì?", options: ["Công viên", "Ngôi nhà thứ hai", "Chợ"], correctAnswer: 1 },
  { id: 7, question: "'Em yêu gia đình em'. Em yêu ai?", options: ["Hàng xóm", "Gia đình em", "Bạn bè"], correctAnswer: 1 },
  { id: 8, question: "'Ông đang đọc báo'. Ông đang làm gì?", options: ["Xem tivi", "Ngủ", "Đọc báo"], correctAnswer: 2 },
  { id: 9, question: "'Chú bộ đội canh gác'. Chú làm nghề gì?", options: ["Bác sĩ", "Bộ đội", "Giáo viên"], correctAnswer: 1 },
  { id: 10, question: "'Con gà gáy o ó o'. Con gì gáy?", options: ["Con vịt", "Con gà", "Con chó"], correctAnswer: 1 }
];

export const spellingQuestions: Question[] = [
  { id: 1, question: "Điền s hay x: ...ẻ gỗ?", options: ["s", "x", "z"], correctAnswer: 1 },
  { id: 2, question: "Điền ch hay tr: ...anh vẽ?", options: ["ch", "tr", "c"], correctAnswer: 0 },
  { id: 3, question: "Điền s hay x: ngôi ...ao?", options: ["s", "x", "sh"], correctAnswer: 0 },
  { id: 4, question: "Điền l hay n: ...úa chín?", options: ["l", "n", "m"], correctAnswer: 0 },
  { id: 5, question: "Điền d, r hay gi: ...a đình?", options: ["d", "r", "gi"], correctAnswer: 2 },
  { id: 6, question: "Điền ch hay tr: con ...uột?", options: ["ch", "tr", "t"], correctAnswer: 1 },
  { id: 7, question: "Điền c hay k: cái ...éo?", options: ["c", "k", "q"], correctAnswer: 1 },
  { id: 8, question: "Điền ng hay ngh: ...ỉ ngơi?", options: ["ng", "ngh", "h"], correctAnswer: 1 },
  { id: 9, question: "Điền g hay gh: con ...à?", options: ["g", "gh", "k"], correctAnswer: 0 },
  { id: 10, question: "Điền s hay x: ...inh đẹp?", options: ["s", "x", "sh"], correctAnswer: 1 }
];

export const englishQuestions: Question[] = [
  { id: 1, question: "'Red' là màu gì?", options: ["Màu đỏ", "Màu xanh", "Màu vàng"], correctAnswer: 0 },
  { id: 2, question: "'Cat' là con gì?", options: ["Con chó", "Con mèo", "Con thỏ"], correctAnswer: 1 },
  { id: 3, question: "'One' là số mấy?", options: ["1", "2", "3"], correctAnswer: 0 },
  { id: 4, question: "'Hello' nghĩa là gì?", options: ["Cảm ơn", "Chào bạn", "Tạm biệt"], correctAnswer: 1 },
  { id: 5, question: "'Dog' là con gì?", options: ["Con chó", "Con lợn", "Con bò"], correctAnswer: 0 },
  { id: 6, question: "'Blue' là màu gì?", options: ["Màu đen", "Màu xanh dương", "Màu trắng"], correctAnswer: 1 },
  { id: 7, question: "'Five' là số mấy?", options: ["4", "5", "6"], correctAnswer: 1 },
  { id: 8, question: "'Apple' là quả gì?", options: ["Quả táo", "Quả chuối", "Quả cam"], correctAnswer: 0 },
  { id: 9, question: "'Goodbye' nghĩa là gì?", options: ["Xin chào", "Tạm biệt", "Hẹn gặp lại"], correctAnswer: 1 },
  { id: 10, question: "'Sun' là gì?", options: ["Mặt trăng", "Mặt trời", "Ngôi sao"], correctAnswer: 1 },
  { id: 11, question: "'Fish' là con gì?", options: ["Con chim", "Con cá", "Con cua"], correctAnswer: 1 },
  { id: 12, question: "'Green' là màu gì?", options: ["Màu xanh lá", "Màu tím", "Màu nâu"], correctAnswer: 0 },
  { id: 13, question: "'Hand' là bộ phận nào?", options: ["Cái chân", "Cái đầu", "Bàn tay"], correctAnswer: 2 },
  { id: 14, question: "'Book' là cái gì?", options: ["Cái bút", "Quyển sách", "Cái thước"], correctAnswer: 1 },
  { id: 15, question: "'Milk' là gì?", options: ["Nước lọc", "Sữa", "Nước ngọt"], correctAnswer: 1 }
];

export const scienceSocietyQuestions: Question[] = [
  { id: 1, question: "Gia đình em gồm có ai?", options: ["Bố mẹ và em", "Bạn bè", "Người lạ"], correctAnswer: 0 },
  { id: 2, question: "Khi đi học bé phải làm gì?", options: ["Nghịch ngợm", "Nghe lời cô giáo", "Ngủ gật"], correctAnswer: 1 },
  { id: 3, question: "Rửa tay giúp bé làm gì?", options: ["Bẩn tay", "Sạch vi khuẩn", "Hỏng tay"], correctAnswer: 1 },
  { id: 4, question: "Đồ dùng học tập của bé là gì?", options: ["Bút chì", "Chổi quét nhà", "Cái nồi"], correctAnswer: 0 },
  { id: 5, question: "Mắt dùng để làm gì?", options: ["Ngửi", "Nhìn", "Nghe"], correctAnswer: 1 },
  { id: 6, question: "Khi gặp người lớn, em phải làm gì?", options: ["Chào hỏi lễ phép", "Bỏ chạy", "Im lặng"], correctAnswer: 0 },
  { id: 7, question: "Bé nên ăn gì để khỏe mạnh?", options: ["Bánh kẹo", "Rau xanh và trái cây", "Nước ngọt"], correctAnswer: 1 },
  { id: 8, question: "Phòng ngủ dùng để làm gì?", options: ["Nấu ăn", "Ngủ", "Tắm"], correctAnswer: 1 },
  { id: 9, question: "Quần áo bẩn thì phải làm gì?", options: ["Mặc tiếp", "Đem đi giặt", "Vứt đi"], correctAnswer: 1 },
  { id: 10, question: "Tai dùng để làm gì?", options: ["Nghe", "Nếm", "Ngửi"], correctAnswer: 0 },
  { id: 11, question: "Đâu là nơi làm việc của bác sĩ?", options: ["Trường học", "Bệnh viện", "Bưu điện"], correctAnswer: 1 },
  { id: 12, question: "Hành động nào giúp bảo vệ môi trường?", options: ["Vứt rác bừa bãi", "Trồng cây", "Hái hoa"], correctAnswer: 1 },
  { id: 13, question: "Mũi dùng để làm gì?", options: ["Nghe", "Nhìn", "Ngửi"], correctAnswer: 2 },
  { id: 14, question: "Đôi chân giúp em làm gì?", options: ["Đi lại", "Cầm nắm", "Nhai thức ăn"], correctAnswer: 0 },
  { id: 15, question: "Khi bị ốm em nên làm gì?", options: ["Đi chơi", "Nói với bố mẹ", "Uống nước ngọt"], correctAnswer: 1 }
];

export const funScienceQuestions: Question[] = [
  { id: 1, question: "Mặt trời mọc ở hướng nào?", options: ["Hướng Đông", "Hướng Tây", "Hướng Nam"], correctAnswer: 0 },
  { id: 2, question: "Cầu vồng thường xuất hiện khi nào?", options: ["Trời nắng to", "Sau cơn mưa", "Ban đêm"], correctAnswer: 1 },
  { id: 3, question: "Con vật nào đẻ trứng?", options: ["Con chó", "Con mèo", "Con gà"], correctAnswer: 2 },
  { id: 4, question: "Cây xanh lấy nước từ đâu?", options: ["Lá cây", "Rễ cây", "Hoa"], correctAnswer: 1 },
  { id: 5, question: "Đá lạnh là nước ở dạng gì?", options: ["Lỏng", "Rắn", "Khí"], correctAnswer: 1 },
  { id: 6, question: "Con hổ sống ở đâu?", options: ["Dưới biển", "Trong rừng", "Trong nhà"], correctAnswer: 1 },
  { id: 7, question: "Mặt trăng xuất hiện khi nào?", options: ["Ban ngày", "Ban đêm", "Lúc mưa"], correctAnswer: 1 },
  { id: 8, question: "Mùa đông thời tiết như thế nào?", options: ["Rất nóng", "Rất lạnh", "Rất ấm"], correctAnswer: 1 },
  { id: 9, question: "Con vịt kêu như thế nào?", options: ["Gâu gâu", "Quạc quạc", "Meo meo"], correctAnswer: 1 },
  { id: 10, question: "Cây cần gì để sống?", options: ["Ánh sáng và nước", "Bánh kẹo", "Quần áo"], correctAnswer: 0 }
];

export const lifeSkillQuestions: Question[] = [
  { id: 1, question: "Khi có người lạ cho quà, em nên làm gì?", options: ["Nhận ngay", "Từ chối và hỏi bố mẹ", "Khóc nhè"], correctAnswer: 1 },
  { id: 2, question: "Sang đường em phải làm gì?", options: ["Chạy thật nhanh", "Đi cùng người lớn", "Vừa đi vừa chơi"], correctAnswer: 1 },
  { id: 3, question: "Trước khi ăn cơm em phải làm gì?", options: ["Đi ngủ", "Rửa tay sạch sẽ", "Xem tivi"], correctAnswer: 1 },
  { id: 4, question: "Khi thấy đồ chơi của bạn, em làm gì?", options: ["Lấy luôn", "Hỏi mượn bạn", "Giật lấy"], correctAnswer: 1 },
  { id: 5, question: "Khi đi nắng em nên làm gì?", options: ["Đội mũ", "Cởi áo", "Chạy nhảy"], correctAnswer: 0 },
  { id: 6, question: "Răng bị sâu là do đâu?", options: ["Ăn nhiều kẹo", "Đánh răng thường xuyên", "Ăn rau"], correctAnswer: 0 },
  { id: 7, question: "Khi ho em nên làm gì?", options: ["Cười to", "Che miệng lại", "Hét lên"], correctAnswer: 1 },
  { id: 8, question: "Đi học về em để cặp ở đâu?", options: ["Vứt sàn nhà", "Để đúng nơi quy định", "Để trên giường"], correctAnswer: 1 },
  { id: 9, question: "Nếu bị lạc em sẽ làm gì?", options: ["Khóc thật to", "Tìm chú công an giúp", "Đi theo người lạ"], correctAnswer: 1 },
  { id: 10, question: "Uống nhiều nước ngọt có tốt không?", options: ["Rất tốt", "Không tốt cho răng", "Giúp cao lớn"], correctAnswer: 1 },
  { id: 11, question: "Ngồi xem tivi quá gần sẽ bị gì?", options: ["Mắt khỏe hơn", "Hỏng mắt", "Mắt to hơn"], correctAnswer: 1 },
  { id: 12, question: "Đi tắm cần chuẩn bị gì?", options: ["Sách vở", "Quần áo sạch", "Giày dép"], correctAnswer: 1 },
  { id: 13, question: "Khi thức dậy em làm gì đầu tiên?", options: ["Đánh răng rửa mặt", "Ăn kẹo", "Đi chơi"], correctAnswer: 0 },
  { id: 14, question: "Em dùng gì để cắt giấy?", options: ["Dao", "Kéo thủ công", "Bút chì"], correctAnswer: 1 },
  { id: 15, question: "Để nhà cửa sạch em cần làm gì?", options: ["Bày đồ chơi", "Cất đồ gọn gàng", "Vứt rác ra sàn"], correctAnswer: 1 }
];

export const moralQuestions: Question[] = [
  { id: 1, question: "Làm vỡ đồ chơi của bạn, em nên làm gì?", options: ["Bỏ chạy", "Xin lỗi bạn", "Cãi nhau"], correctAnswer: 1 },
  { id: 2, question: "Thấy bạn ngã em nên làm gì?", options: ["Cười nhạo", "Đỡ bạn dậy", "Bỏ đi"], correctAnswer: 1 },
  { id: 3, question: "Em nhận quà từ người lớn bằng mấy tay?", options: ["Một tay", "Hai tay", "Không nhận"], correctAnswer: 1 },
  { id: 4, question: "Đồ chơi dùng xong phải làm gì?", options: ["Vứt đó", "Cất gọn gàng", "Mang cho người khác"], correctAnswer: 1 },
  { id: 5, question: "Em có nên nói dối không?", options: ["Có", "Không", "Lúc nào cũng được"], correctAnswer: 1 },
  { id: 6, question: "Hành động nào là ngoan?", options: ["Giúp mẹ lau bàn", "Quấy khóc", "Đánh bạn"], correctAnswer: 0 },
  { id: 7, question: "Thấy đồ rơi, em nên làm gì?", options: ["Nhặt lên trả lại", "Lấy luôn", "Đá đi"], correctAnswer: 0 },
  { id: 8, question: "Khi mắc lỗi em phải làm gì?", options: ["Đổ lỗi cho bạn", "Nhận lỗi và sửa", "Im lặng"], correctAnswer: 1 },
  { id: 9, question: "Em có nên chia sẻ đồ chơi với bạn không?", options: ["Không", "Có", "Chỉ chơi một mình"], correctAnswer: 1 },
  { id: 10, question: "Yêu quý con vật là hành động thế nào?", options: ["Xấu", "Tốt", "Bình thường"], correctAnswer: 1 }
];

export const musicQuestions: Question[] = [
  { id: 1, question: "Cái gì dùng để đánh trống?", options: ["Cái dùi", "Cái bút", "Cái thìa"], correctAnswer: 0 },
  { id: 2, question: "Âm thanh của tiếng chim hót là gì?", options: ["Lộp bộp", "Líu lo", "Ầm ầm"], correctAnswer: 1 },
  { id: 3, question: "Đàn ghi-ta có dây không?", options: ["Có", "Không", "Chỉ có phím"], correctAnswer: 0 },
  { id: 4, question: "Tiếng trống kêu như thế nào?", options: ["Tùng tùng", "Kính coong", "Tít tít"], correctAnswer: 0 },
  { id: 5, question: "Hát bài 'Cả nhà thương nhau', ai thương con?", options: ["Bố và mẹ", "Bạn bè", "Bác sĩ"], correctAnswer: 0 },
  { id: 6, question: "Dùng gì để gõ mõ?", options: ["Cái gậy", "Cái dùi", "Bàn tay"], correctAnswer: 1 },
  { id: 7, question: "Kèn thổi ra âm thanh bằng gì?", options: ["Hơi thở", "Bàn chân", "Cái tay"], correctAnswer: 0 },
  { id: 8, question: "Âm thanh nào to hơn?", options: ["Tiếng sấm", "Tiếng mưa rơi", "Tiếng lá rụng"], correctAnswer: 0 },
  { id: 9, question: "Đàn Piano dùng gì để chơi?", options: ["Thổi hơi", "Gõ phím", "Kéo dây"], correctAnswer: 1 },
  { id: 10, question: "Khi nghe nhạc vui, em thấy thế nào?", options: ["Buồn", "Vui vẻ", "Muốn ngủ"], correctAnswer: 1 }
];

export const artQuestions: Question[] = [
  { id: 1, question: "Màu nào là màu của lá cây?", options: ["Xanh lá", "Đỏ", "Tím"], correctAnswer: 0 },
  { id: 2, question: "Để vẽ tranh em cần gì?", options: ["Bút chì màu", "Cái chổi", "Cái búa"], correctAnswer: 0 },
  { id: 3, question: "Hình vuông có mấy cạnh?", options: ["3", "4", "5"], correctAnswer: 1 },
  { id: 4, question: "Màu của quả chuối chín là gì?", options: ["Xanh dương", "Vàng", "Đen"], correctAnswer: 1 },
  { id: 5, question: "Vẽ mặt trời dùng màu gì đẹp nhất?", options: ["Màu đen", "Màu đỏ/cam", "Màu tím"], correctAnswer: 1 },
  { id: 6, question: "Hình tròn giống đồ vật nào?", options: ["Cái hộp", "Quả bóng", "Quyển sách"], correctAnswer: 1 },
  { id: 7, question: "Dùng gì để tô màu nước?", options: ["Bút lông", "Cục tẩy", "Thước kẻ"], correctAnswer: 0 },
  { id: 8, question: "Trộn màu đỏ với vàng ra màu gì?", options: ["Màu cam", "Màu tím", "Màu xanh"], correctAnswer: 0 },
  { id: 9, question: "Hình tam giác có mấy cạnh?", options: ["2", "3", "4"], correctAnswer: 1 },
  { id: 10, question: "Để xóa vết bút chì em dùng gì?", options: ["Cục tẩy", "Mực", "Giấy nháp"], correctAnswer: 0 }
];

export const iqQuestions: Question[] = [
  { id: 1, question: "Tìm hình khác biệt: Tròn, Tròn, Vuông, Tròn?", options: ["Tròn", "Vuông", "Không có"], correctAnswer: 1 },
  { id: 2, question: "Con gì không thuộc nhóm: Chó, Mèo, Cá cám, Chim?", options: ["Chó", "Cá cám", "Chim"], correctAnswer: 1 },
  { id: 3, question: "Tiếp theo: 1, 2, 1, 2, ...?", options: ["1", "2", "3"], correctAnswer: 0 },
  { id: 4, question: "Quả nào không thuộc nhóm: Táo, Cam, Bút chì?", options: ["Táo", "Cam", "Bút chì"], correctAnswer: 2 },
  { id: 5, question: "Bóng của hình tròn là hình gì?", options: ["Hình vuông", "Hình tròn", "Hình tam giác"], correctAnswer: 1 },
  { id: 6, question: "Con vật nào to nhất: Kiến, Mèo, Voi?", options: ["Kiến", "Mèo", "Voi"], correctAnswer: 2 },
  { id: 7, question: "Đồ vật nào dùng để ngồi?", options: ["Cái bàn", "Cái ghế", "Cái giường"], correctAnswer: 1 },
  { id: 8, question: "Màu nào khác nhất: Đỏ, Cam, Đen?", options: ["Đỏ", "Cam", "Đen"], correctAnswer: 2 },
  { id: 9, question: "Ngược lại với 'To' là gì?", options: ["Lớn", "Nhỏ", "Cao"], correctAnswer: 1 },
  { id: 10, question: "Con gì biết bơi: Gà, Vịt, Lợn?", options: ["Gà", "Vịt", "Lợn"], correctAnswer: 1 }
];

export const fastMathGameQuestions: Question[] = [
  { id: 1, question: "1 + 1 = ?", options: ["2", "3", "4"], correctAnswer: 0 },
  { id: 2, question: "2 + 2 = ?", options: ["3", "4", "5"], correctAnswer: 1 },
  { id: 3, question: "5 - 1 = ?", options: ["4", "3", "2"], correctAnswer: 0 },
  { id: 4, question: "3 + 0 = ?", options: ["0", "3", "6"], correctAnswer: 1 },
  { id: 5, question: "4 - 2 = ?", options: ["2", "1", "0"], correctAnswer: 0 },
  { id: 6, question: "2 + 3 = ?", options: ["4", "5", "6"], correctAnswer: 1 },
  { id: 7, question: "10 - 5 = ?", options: ["4", "5", "6"], correctAnswer: 1 },
  { id: 8, question: "7 + 1 = ?", options: ["8", "7", "9"], correctAnswer: 0 },
  { id: 9, question: "6 - 3 = ?", options: ["2", "3", "4"], correctAnswer: 1 },
  { id: 10, question: "0 + 9 = ?", options: ["0", "9", "10"], correctAnswer: 1 }
];

export const wordMatchGameQuestions: Question[] = [
  { id: 1, question: "G_ (Con vật gáy sáng)", options: ["A", "O", "E"], correctAnswer: 0 },
  { id: 2, question: "M_O (Con vật bắt chuột)", options: ["E", "A", "O"], correctAnswer: 0 },
  { id: 3, question: "C_A (Con vật bò ngang)", options: ["U", "A", "O"], correctAnswer: 0 },
  { id: 4, question: "C_O (Con vật trung thành)", options: ["H", "A", "O"], correctAnswer: 0 },
  { id: 5, question: "V_T (Con vật bơi dưới ao)", options: ["I", "E", "O"], correctAnswer: 0 },
  { id: 6, question: "B_ (Con vật cho sữa)", options: ["O", "A", "E"], correctAnswer: 0 },
  { id: 7, question: "H_C (Bé đang ... bài)", options: ["O", "A", "U"], correctAnswer: 0 },
  { id: 8, question: "V_ (Bé viết vào ...)", options: ["O", "A", "E"], correctAnswer: 0 },
  { id: 9, question: "C_ (Đi bộ bằng ...)", options: ["A", "H", "O"], correctAnswer: 1 },
  { id: 10, question: "T_ (Dùng để nghe)", options: ["A", "I", "O"], correctAnswer: 1 }
];
