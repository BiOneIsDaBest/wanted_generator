const lessons = {
    "Day 1": { 
        title: "Giáo Trình Đào Tạo Học Viên", 
        description: "Giáo Trình chi tiết đào tạo Nhân Viên ban ngành, Học và Cấp giấy chứng nhận hành nghề sĩ quan.", 
        img: "assets/lesson1.jpg",
        canvaLink: "https://www.canva.com/design/DAGMoWMHWGI/gjcBxCIlnrae14jdICXvHA/edit"
    },

    "Day 2": { 
        title: "Giáo Trình Đào Tạo Chính Quy", 
        description: "Coming Soon...", 
        img: "assets/lesson2.jpg" 
    },

    "Day 3": { 
        title: "Luật Sử Dụng Súng Điện", 
        description: `Mục đích sử dụng súng điện là dành cho LLCS khống chế, vô hiệu hoá tạm thời để bắt giữ 
        những đối tượng có hành vi phạm tội và chống đối hiệu lệnh mà không gây sát thương.`,
        details: `
        <h4>Điều 1:</h4>
        <p>Mục đích sử dụng súng điện là dành cho LLCS khống chế, vô hiệu hoá tạm thời để bắt giữ những đối tượng có hành vi phạm tội và chống đối hiệu lệnh của LLCS mà không gây ra sát thương.</p>
        
        <h4>Điều 2:</h4>
        <p><strong>Điều kiện sử dụng súng điện của LLCS:</strong></p>
        <ul>
            <li>Chỉ sử dụng súng điện khi đối tượng không có vũ khí hoặc sử dụng vũ khí thô sơ (dao, kiếm, mã tấu, gậy bóng chày, và các vũ khí cận chiến có thể gây sát thương).</li>
            <li>Nếu đối tượng sử dụng súng đạn thật, LLCS không được phép dùng súng điện mà phải sử dụng súng đạn thật để trấn áp.</li>
            <li>Nếu cảnh sát lạm dụng súng điện trong các tình huống không phù hợp, sẽ bị kỷ luật hoặc xử lý OOC.</li>
        </ul>
        `,
        img: "assets/lesson3.jpg" 
    },

    "Day 4": { 
    title: "Các Bước Tương Tác Giao Thông", 
    description: "Hướng dẫn chi tiết về các bước xử lý vi phạm giao thông.", 
    img: "assets/lesson4.jpg",
    details: `
        <h4>Bước 1: Chào hỏi</h4>
        <p>Phải dùng lệnh <code>/e salute</code> để chào trước khi nói: Chào hỏi người vi phạm, giới thiệu bản thân tên gì, chức vụ, thuộc LLCS (LSPD, LSSD, PA,...).</p>
        <p><strong>Ví dụ:</strong> "Chào anh/chị, tôi là sĩ quan A thuộc lực lượng cảnh sát... chức vụ... quân hàm..."</p>

        <h4>Bước 2: Thông báo lỗi</h4>
        <p>Thông báo lỗi vi phạm cho người vi phạm được biết (kiểm tra lại bằng chứng vi phạm trước khi thông báo).</p>
        <p>Nếu họ không thừa nhận lỗi vi phạm, hãy cung cấp bằng chứng.</p>
        <p><strong>Ví dụ:</strong> "Anh/chị đã vi phạm chạy quá tốc độ 270/140 km trong đường thành phố, có thể cho tôi biết lý do tại sao chạy nhanh thế không?"</p>

        <h4>Bước 3: Kiểm tra thông tin</h4>
        <p>Tiến hành yêu cầu kiểm tra GPLX, thông tin xe, CCCD để xem có bị truy nã hay không.</p>
        <p><strong>Ví dụ:</strong> "Yêu cầu anh/chị xuất trình GPLX để chúng tôi kiểm tra."</p>

        <h4>Bước 4: Đánh giá thái độ và xử lý</h4>
        <p>Xem xét thái độ tương tác của người vi phạm, sau đó đưa ra quyết định xử phạt hoặc nhắc nhở tùy theo sĩ quan.</p>

        <h4>Bước 5: Kết thúc buổi làm việc</h4>
        <p>Chào lại và nhắc nhở người vi phạm nếu cần thiết.</p>
        <p><strong>Ví dụ:</strong> "Chào anh/chị B, anh/chị vui lòng bổ sung GPLX để tránh mất thời gian về sau nhé. Chúc anh/chị có một ngày tốt lành!"</p>
    `
    },

    "Day 5": { 
    title: "Các Bước Tương Tác Hình Sự", 
    description: "Hướng dẫn chi tiết về tương tác trong các vụ án hình sự.",
    img: "assets/lesson5.jpg",
    details: `
        <h4>Bước 1: Chào hỏi và giới thiệu</h4>
        <p><strong>Trường hợp 1 (Đầu thú):</strong> Chào hỏi và giới thiệu bản thân, sau đó hỏi công dân đến đầu thú với tội danh nào (dựa theo lời khai của công dân).</p>
        <p><strong>Ví dụ:</strong> "Tôi là sĩ quan A, đến từ lực lượng cảnh sát..., chức vụ hiện tại là..., quân hàm... Anh/chị đến đầu thú với tội danh gì?"</p>

        <p><strong>Trường hợp 2 (Bắt về đồn):</strong> Chào hỏi và giới thiệu bản thân, sau đó thông báo tội danh cho đối tượng biết lý do bị bắt.</p>
        <p><strong>Ví dụ:</strong> "Tôi là sĩ quan A, đến từ lực lượng cảnh sát..., chức vụ hiện tại là..., quân hàm... Anh/chị bị bắt về đồn với tội danh..."</p>

        <h4>Bước 2: Kiểm tra CCCD</h4>
        <p>Yêu cầu tội phạm xuất trình CCCD để kiểm tra xem có tội danh nào khác trên bằng chứng truy nã hay không.</p>
        <ul>
            <li><strong>Nếu có:</strong> Nêu lại tội danh, giải đáp thắc mắc và gửi lại bằng chứng cho tội phạm biết.</li>
            <li>Nếu đối tượng có sử dụng vũ khí gây án mà không giao nộp, sẽ bị quy thêm tội không giao nộp.</li>
        </ul>

        <h4>Bước 3: Lục soát</h4>
        <p>Tiến hành lục soát, nếu phát hiện đối tượng <strong>tàng trữ vũ khí nóng</strong> (không có giấy NVQS), giáp hoặc vật phẩm cấm, thì cộng thêm tội danh "Tàng trữ vũ khí trái phép".</p>

        <h4>Bước 4: Thông báo mức án</h4>
        <p>Thông báo tổng các tội danh & mức án cho tội phạm, đồng thời hỏi xem họ có đồng ý hay không.</p>
        <p><strong>Trường hợp 1:</strong> Nếu tội phạm đồng ý, tiến hành phạt bill và bỏ tù.</p>
        <p><strong>Trường hợp 2:</strong> Nếu tội phạm không đồng ý, cảnh sát có thể giải thích thêm về các tội danh hoặc cung cấp thêm bằng chứng.</p>
        <p><strong>Lưu ý:</strong> Tùy theo thái độ hợp tác, cảnh sát có thể giảm số phút tù.</p>
    `
    },

    "Day 6": { 
    title: "Các Nhóm Tội Phạm Chính", 
    description: "Phân loại và nhận diện các nhóm tội phạm chính.",
    img: "assets/lesson6.jpg",
    details: `
        <h4>Sơ Đồ Xử Án Tội Phạm</h4>
        <p>Hệ thống xử án tội phạm được chia thành 3 nhóm chính, với mức án tối đa khác nhau:</p>
        <ul>
            <li><strong>Nhóm: Tội danh thông thường</strong> - Tối đa <strong>500 phút</strong>.</li>
            <li><strong>Nhóm: Tội danh tấn công trụ sở</strong> - Tối đa <strong>1000 phút</strong>.</li>
            <li><strong>Nhóm: Tội danh bạo động</strong> - Tối đa <strong>1000 phút</strong>.</li>
        </ul>
        <h5>Đơn giản cho việc xử án của anh em cảnh sát.
        (Các tội danh thông thường - Tối đa 500p) + ( Tội danh bạo động - Tối đa 1000p) + ( Tội danh tấn công trụ sở - Tối đa 1000p) = Mức án người vi phạm.
        Hiện tại chỉ có 3 nhóm tội danh chính đó thôi.
        Khi bắt được xử án xong resert lại cho người dân. Vi phạm lại thì tính lại từ đầu.</h5>
        <p>TỔNG MỨC ÁN TÔI ĐA LÀ <B>2500 PHÚT</B><p>
        <p>Dưới đây là sơ đồ minh họa chi tiết về cách xử án:</p>
        <img src="assets/crime_flowchart.jpg" alt="Sơ đồ xử án tội phạm" style="max-width: 100%; border-radius: 10px; margin-top: 10px;">
    `
    },
    "Day 7": { 
    title: "Code BK Thông dụng", 
    description: "Danh sách các mã code quan trọng cần nhớ.",
    img: "assets/lesson7.jpg",
    details: `
        <h4>Danh Sách Code (BK)</h4>
        <ul>
            <li><strong>BK1:</strong> Yêu cầu hỗ trợ truy đuổi (khu vực ...).</li>
            <li><strong>BK5:</strong> Yêu cầu hỗ trợ từ LSPD (khi có giao tranh lớn).</li>
            <li><strong>BK6:</strong> Yêu cầu hỗ trợ từ LSSD (khi có giao tranh lớn).</li>
            <li><strong>BK7:</strong> Gọi hỗ trợ áp giải đối tượng (trường hợp trực bảo an, lag lỗi xe...).</li>
            <li><strong>BK99:</strong> Yêu cầu hỗ trợ từ tất cả các ban ngành (để trấn áp bạo loạn) - Chỉ từ cấp đội trưởng hoặc trưởng phòng trở lên mới được phép sử dụng.</li>
            <li><strong>BK2:</strong> Hủy tất cả các yêu cầu (code) ở trên.</li>
            <li><strong>CP999:</strong> Yêu cầu hỗ trợ từ chính phủ.</li>
        </ul>
    `
}
};

function showLessonDetails(day) {
    const lesson = lessons[day];
    if (lesson) {
        const modal = document.getElementById('lesson-modal');
        const modalContent = document.getElementById('modal-content');

        let detailsContent = lesson.details ? lesson.details : "";
        let canvaButton = lesson.canvaLink 
            ? `<a href="${lesson.canvaLink}" target="_blank" class="modal-button">Xem trên Canva</a>` 
            : '';

        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h3>${lesson.title}</h3>
            </div>
            <div class="modal-body">
                <img src="${lesson.img}" alt="${lesson.title}" style="max-width: 100%; border-radius: 10px; margin-bottom: 10px;">
                <p>${lesson.description}</p>
                ${detailsContent}
                ${canvaButton}
            </div>
            <div class="resize-handle"></div> <!-- Phần tay cầm để kéo giãn -->
        `;

        modal.style.display = 'flex'; // Hiển thị modal
        modal.classList.remove("modal-close-animation");
        modal.classList.add("modal-open-animation");
        document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi mở modal

        makeModalResizable(); // Kích hoạt chức năng kéo giãn (chỉ khi modal mở)
    } else {
        console.error(`Không tìm thấy bài học: ${day}`);
    }
}

function closeModal() {
    const modal = document.getElementById('lesson-modal');
    modal.classList.remove("modal-open-animation");
    modal.classList.add("modal-close-animation");

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Đóng modal khi bấm ra ngoài
window.onclick = function(event) {
    const modal = document.getElementById('lesson-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// ✅ Đảm bảo modal KHÔNG tự mở khi tải trang
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('lesson-modal');
    if (modal) {
        modal.style.display = 'none'; // Đảm bảo modal ẩn ngay từ đầu
    }
});

// ✅ Cho phép người dùng kéo giãn modal chỉ khi modal mở
function makeModalResizable() {
    const modal = document.querySelector('.modal-content');
    if (!modal) return; // Ngăn lỗi nếu modal chưa tồn tại

    const resizeHandle = document.querySelector('.resize-handle');
    let isResizing = false;

    resizeHandle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        isResizing = true;
        document.addEventListener('mousemove', resize, false);
        document.addEventListener('mouseup', stopResize, false);
    });

    function resize(e) {
        if (isResizing) {
            let newWidth = e.clientX - modal.offsetLeft;
            let newHeight = e.clientY - modal.offsetTop;

            if (newWidth > 400 && newWidth < window.innerWidth * 0.9) {
                modal.style.width = newWidth + 'px';
            }
            if (newHeight > 300 && newHeight < window.innerHeight * 0.9) {
                modal.style.height = newHeight + 'px';
            }
        }
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize, false);
        document.removeEventListener('mouseup', stopResize, false);
    }
}