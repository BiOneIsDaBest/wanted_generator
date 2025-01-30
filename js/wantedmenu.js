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
            "Tấn công Cán bộ Cấp Cao",
            "Tấn công Nhân viên y tế",
            "Tấn công Nhân viên báo chí",
            "Có lời nói, hành động đe dọa nhân viên Chính Phủ (Chữ vàng)"
        ]
    },
    { 
        level: 5, 
        description: "Tội phạm nguy hiểm cấp độ 5", 
        fine: 0, 
        punishment: 180, 
        crimes: [
            "Lợi dụng quyền ra tòa để bỏ trốn"
        ]
    },
    { 
        level: 5, 
        description: "Tội phạm nguy hiểm cấp độ 5 (500p)", 
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

// Hàm tạo checkbox và ô nhập số lần
function renderCrimeCheckboxes() {
    violations.forEach(level => {
        const section = document.createElement("div");
        section.className = "violation-section";

        const title = document.createElement("h3");
        title.textContent = `Mức độ ${level.level}: ${level.description}`;
        section.appendChild(title);

        // Thêm logic cho Combo Súng (Mức độ 2)
        if (level.level === 2) {
            const comboBox = document.createElement("input");
            comboBox.type = "checkbox";
            comboBox.value = "Combo Súng";
            comboBox.dataset.punishment = 30;
            comboBox.addEventListener("change", function () {
                const relatedCrimes = [
                    "Tàng trữ vũ khí nóng trái phép",
                    "Sử dụng vũ khí nóng trái phép",
                    "Sử dụng vũ khí nóng nơi công cộng"
                ];

                if (comboBox.checked) {
                    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
                        if (relatedCrimes.includes(checkbox.value)) {
                            checkbox.checked = false;
                            checkbox.disabled = true;
                        }
                    });
                } else {
                    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
                        if (relatedCrimes.includes(checkbox.value)) {
                            checkbox.disabled = false;
                        }
                    });
                }
                updateEmbed();
            });

            const comboLabel = document.createElement("label");
            comboLabel.style.fontWeight = "bold";
            comboLabel.style.color = "red";
            comboLabel.textContent = " Combo Súng";
            section.appendChild(comboBox);
            section.appendChild(comboLabel);
            section.appendChild(document.createElement("br"));
        }

        level.crimes.forEach(crime => {
            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.alignItems = "center";
            container.style.marginBottom = "10px";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = crime;
            checkbox.dataset.punishment = level.punishment;
            checkbox.dataset.level = level.level;
            checkbox.addEventListener("change", updateEmbed);
            container.appendChild(checkbox);

            const label = document.createElement("span");
            label.textContent = ` ${crime}`;
            container.appendChild(label);

            // Thêm ô nhập số lần vi phạm cho các tội danh đặc biệt
            if (
                crime === "Tấn công gây thương tích nghiêm trọng cho người khác" ||
                crime === "Tấn công Cán bộ Cấp Cao" ||
                crime === "Tấn công Nhân viên y tế" ||
                crime === "Tấn công Nhân viên báo chí" ||
                crime === "Sử dụng vũ khí tấn công sĩ quan Quân đội, đặc vụ FIB, sĩ quan Cảnh sát, giảng viên Học viện, nhân viên MW" ||
                crime === "Tội Danh Bạo Động (tối đa 1000 phút)" ||
                crime === "Tội danh tấn công trụ sở, nơi làm việc thuộc Ban ngành Nhà nước (tối đa 1000 phút)"
            ) {
                const input = document.createElement("input");
                input.type = "number";
                input.min = 1;
                input.value = 1;
                input.style.marginLeft = "10px";
                input.style.width = "50px";
                input.dataset.crime = crime;
                input.addEventListener("input", updateEmbed);

                // Giới hạn tối đa 5 lần cho Mức độ 6
                if (level.level === 6) {
                    input.max = 5;
                }

                container.appendChild(input);
            }

            section.appendChild(container);
        });

        violationList.appendChild(section);
    });
}

// Hàm cập nhật tổng mức án
function updateEmbed() {
    let selectedCrimes = [];
    let totalMinutes = 0;
    let totalFine = 0;
    let level1to5Minutes = 0;

    const comboGunSelected = document.querySelector("input[value='Combo Súng']:checked");

    document.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => {
        const crime = checkbox.value;
        const punishment = parseInt(checkbox.dataset.punishment, 10);
        const level = parseInt(checkbox.dataset.level, 10);

        let minutes = punishment;

        // Nếu Combo Súng được chọn, bỏ qua các tội danh liên quan
        if (comboGunSelected) {
            const relatedCrimes = [
                "Tàng trữ vũ khí nóng trái phép",
                "Sử dụng vũ khí nóng trái phép",
                "Sử dụng vũ khí nóng nơi công cộng"
            ];
            if (relatedCrimes.includes(crime)) {
                return; // Bỏ qua, không cộng thời gian cho các tội danh liên quan
            }
        }

        // Xử lý Combo Súng
        if (crime === "Combo Súng") {
            minutes = 30; // Đảm bảo chỉ tính 30 phút
            selectedCrimes.push("Sử dụng vũ khí nóng nơi công cộng ( KTNVQS +60p )");
        } else {
            // Xử lý logic cho các tội danh đặc biệt với số lần vi phạm
            if (
                crime === "Tấn công gây thương tích nghiêm trọng cho người khác" ||
                crime === "Tấn công Cán bộ Cấp Cao" ||
                crime === "Tấn công Nhân viên y tế" ||
                crime === "Tấn công Nhân viên báo chí" ||
                crime === "Sử dụng vũ khí tấn công sĩ quan Quân đội, đặc vụ FIB, sĩ quan Cảnh sát, giảng viên Học viện, nhân viên MW" ||
                crime === "Tội Danh Bạo Động (tối đa 1000 phút)" ||
                crime === "Tội danh tấn công trụ sở, nơi làm việc thuộc Ban ngành Nhà nước (tối đa 1000 phút)"
            ) {
                const input = document.querySelector(`input[data-crime="${crime}"]`);
                const multiplier = input ? parseInt(input.value, 10) : 1;

                // Áp dụng giới hạn tối đa cho Mức độ 6
                if (level === 6) {
                    minutes *= Math.min(multiplier, 5); // Giới hạn tối đa là 5
                } else {
                    minutes *= multiplier; // Không giới hạn cho Mức độ 3
                }
            }

            selectedCrimes.push(crime);
        }

        totalMinutes += minutes;
        totalFine += parseInt(checkbox.dataset.fine || 0, 10);

        // Cộng dồn số phút cho mức độ 1-5
        if (level >= 1 && level <= 5) {
            level1to5Minutes += minutes;
        }
    });

    // Kiểm tra giới hạn tổng thời gian mức độ 1-5
    if (level1to5Minutes > 500) {
        totalMinutes -= level1to5Minutes - 500;
    }

    embedCrimes.textContent = selectedCrimes.join(", ");
    embedTotal.textContent = `${totalMinutes} phút`;
    embedFine.textContent = `${totalFine}$`;
}

// Hàm sao chép thông tin
function copyEmbedContent() {
    const embedText = `Tên:
CCCD:
Tội danh: ${embedCrimes.textContent}
Mức án: ${embedTotal.textContent}`;

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = embedText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    alert('Thông tin đã được sao chép vào clipboard!');
}

// Khởi tạo danh sách vi phạm
renderCrimeCheckboxes();

// Thêm sự kiện click cho nút "Sao chép"
document.getElementById('copy-btn').addEventListener('click', copyEmbedContent);


           // Created by BiOneIsDaBest
