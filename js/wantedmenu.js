// Dữ liệu các mức độ vi phạm đầy đủ
const violations = [
    { 
        level: 1, 
        description: "Vi phạm ít nghiêm trọng", 
        fine: 60000, 
        punishment: 20, 
        crimes: [
            "Cản trở người thi hành công vụ", 
            "Hỗ trợ đồng bọn, trợ giúp phạm",
            "Không giao nộp hung khí đã gây án",
            "Tàng trữ hoặc sử dụng vật phẩm trái phép tại nơi công cộng (Giáp)",
            "Giả dạng, tự xưng là người Nhà nước",
            "Gây rối trật tự nơi công cộng",
            "Gây rối trước trụ sở cơ quan nhà nước",
            "Sử dụng nắm đấm gây rối trật tự công cộng",
            "Trộm cắp bất hợp pháp với nhà công dân",
            "Phá hoại tài sản nhà nước"
        ]
    },
    { 
        level: 2, 
        description: "Vi phạm nghiêm trọng", 
        fine: 90000, 
        punishment: 30, 
        crimes: [
            "Nhập cư trái phép (không xuất trình được Căn cước công dân, Hộ chiếu)",
            "Tàng trữ chất cấm trái phép",
            "Vu khống người khác",
            "Có hành động, lời lẽ xúc phạm đến danh dự, nhân phẩm của người khác",
            "Sử dụng vũ khí thô sơ nơi công cộng",
            "Tàng trữ vũ khí nóng trái phép",
            "Sử dụng vũ khí nóng trái phép",
            "Sử dụng vũ khí nóng nơi công cộng",
            "Lừa đảo chiếm đoạt tài sản người",
            "Gây thương tích chưa nghiêm trọng cho người khác",
            "Chống đối người thi hành công vụ",
            "Xâm nhập trụ sở, nơi làm việc thuộc Ban ngành Nhà nước"
        ]
    },
    { 
        level: 3, 
        description: "Vi phạm cực kì nghiêm trọng", 
        fine: 0, 
        punishment: 60, 
        crimes: [
            "Tấn công gây thương tích nghiêm trọng cho người khác",
            "Sử dụng vũ khí tấn công sĩ quan Quân đội, đặc vụ FIB, sĩ quan Cảnh sát, giảng viên Học viện, nhân viên MW",
            "Rao bán, hỏi mua, thực hiện giao dịch mua bán vũ khí trái phép bằng bất kỳ hình thức nào (áp dụng tại nơi công cộng)"
        ]
    },
    { 
        level: 4, 
        description: "Vi phạm đặc biệt nghiêm trọng", 
        fine: 0, 
        punishment: 120, 
        crimes: [
            "Tấn công Cán bộ Cấp cao",
            "Tấn công Nhân viên y tế",
            "Có lời nói, hành động đe dọa nhân viên Chính Phủ (Chữ vàng)",
            "Tấn công Nhân viên báo chí"
        ]
    },
    { 
        level: 5, 
        description: "Tội phạm nguy hiểm cấp độ 5", 
        fine: 0, 
        punishment: 180, 
        crimes: [
            "Lợi dụng quyền ra tòa để bỏ trốn",
        ]
    },

    { 
        level: 5, 
        description: "Tội phạm nguy hiểm cấp độ 5", 
        fine: 0, 
        punishment: 500, 
        crimes: [
            "Tấn công Thống đốc; Phó Thống đốc; Nhân viên Chính phủ (chữ vàng)"
        ]
    },

    { 
        level: 6, 
        description: "Tội phạm bạo động và tấn công trụ sở", 
        fine: 0, 
        punishment: 200, 
        crimes: [
            "Tội Danh Bạo Động (tối đa 1000 phút)", 
            "Tội danh tấn công trụ sở, nơi làm việc thuộc Ban ngành Nhà nước (tối đa 1000 phút)"
        ]
    }
];

// Lấy các phần tử DOM
const violationList = document.getElementById("violation-list");
const embedCrimes = document.getElementById("embed-crimes");
const embedTotal = document.getElementById("embed-total");
const embedFine = document.getElementById("embed-fine");

// Hàm tạo checkbox cho tội danh
function renderCrimeCheckboxes() {
    violations.forEach((levelData) => {
        const section = document.createElement("div");
        section.className = "violation-section";

        // Hiển thị tiêu đề với tên riêng
        const levelTitle = document.createElement("h3");
        levelTitle.textContent = `Mức độ ${levelData.level}: ${levelData.description}`;
        section.appendChild(levelTitle);

        levelData.crimes.forEach((crime) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = crime;
            checkbox.dataset.punishment = levelData.punishment; // Gắn số phút phạt tù
            checkbox.dataset.fine = levelData.fine; // Gắn tiền phạt
            checkbox.dataset.level = levelData.level; // Gắn mức độ
            checkbox.addEventListener("change", updateEmbed);
            section.appendChild(checkbox);
            section.append(` ${crime}`);
            section.appendChild(document.createElement("br"));
        });

        violationList.appendChild(section);
    });
}

// Hàm cập nhật thông tin embed
function updateEmbed() {
    let selectedCrimes = [];
    let totalMinutes = 0;
    let totalFine = 0;

    document.querySelectorAll("input[type='checkbox']:checked").forEach((checkbox) => {
        const crime = checkbox.value;
        const level = parseInt(checkbox.dataset.level, 10);
        let punishment = parseInt(checkbox.dataset.punishment, 10);

        // Xử lý logic đặc biệt cho Mức độ 6
        if (level === 6 && crime.includes("Bạo Động")) {
            const multiplier = prompt("Số lần thực hiện hành vi Bạo Động (tối đa 5 lần):", 1);
            punishment = Math.min(5, parseInt(multiplier, 10)) * 200;
        } else if (level === 6 && crime.includes("tấn công trụ sở")) {
            const multiplier = prompt("Số lần tấn công trụ sở (tối đa 5 lần):", 1);
            punishment = Math.min(5, parseInt(multiplier, 10)) * 200;
        }

        selectedCrimes.push(crime);
        totalMinutes += punishment;
    });

    // Cập nhật hiển thị
    embedCrimes.textContent = selectedCrimes.length > 0 ? selectedCrimes.join(", ") : "(Chưa chọn)";
    embedTotal.textContent = `${totalMinutes} phút`;
    embedFine.textContent = `${totalFine}$`;
}

// Khởi tạo danh sách tội danh
renderCrimeCheckboxes();
