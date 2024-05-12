//WIP//
list = [
    { link: "nn-2.html", author: "29_tringuyen", date: "03/03/2024", img: "", title: "Ngày Nguyên 2 - 29_tringuyen sẽ không luôn luôn sử dụng Internet cho tới tháng năm. Vì sao?" },
    { link: "nn-1.html", author: "29_tringuyen", date: "07/02/2024", img: "", title:"Ngày Nguyên 1 - Có cái gì mới về trang web của 29_tringuyen ở ngày 07/02/2024?"},
    { link: "12_11_2023.html", author: "29_tringuyen", date: "12/11/2023", img: "", title: "Chuyện gì xảy ra với 29tringuyen.000webhostapp.com?" },
    { link: "18_7_2023.html", author: "29_tringuyen", date: "18/07/2023", img: "", title: "The TN. Production công bố kỷ niệm 5 năm của kênh YouTube" },
    { link: "11_6_2023.html", author: "29_tringuyen", date: "11/06/2023", img: "", title: "Tài khoản YouTube của The TN. Production tiếp tục bị tấn công tại tin tặc, nên tạo tài khoản mới." },
    { link: "2_5_2023.html", author: "29_tringuyen", date: "02/05/2023", img: "", title: "Tài khoản của The TN. Production bị tấn công bởi tệp phần mềm độc hại được tải lên từ trường học" },
    { link: "7_1_2023.html", author: "29_tringuyen", date: "07/01/2023", img: "", title: "The TN. Production tạm dừng quá trình làm YouTube Video của anh ấy cho đến khi anh ấy học xong lớp 9" },
]

const PageNumberQueue = 30

function CreateList(BlogList, index) {
    var frame = document.createElement("div")
    frame.className = "BlogFrame"
    frame.style = "border-style: solid;"
    BlogList.appendChild(frame)

    var link = document.createElement("a")
    link.href = "../sections/blog/" + list[index].link 
    link.innerHTML = list[index].title
    link.style = "font-family:'Times New Roman'; font-size:30px;"
    frame.appendChild(link)

    var dateandauthor = document.createElement("p")
    dateandauthor.innerHTML = list[index].date + " | Tác giả: " + list[index].author
    frame.appendChild(dateandauthor)
}

function LoadBlog() {
    var BlogLists = document.getElementsByClassName("BlogList")
    if (BlogLists.length > 0) {
        for (let bl = 0; bl < BlogLists.length; bl++) {
            //////////////////////////////////////////////
            for (let bs = 0; bs < list.length; bs++) {
                CreateList(BlogLists[bl], bs)
                BlogLists[bl].appendChild(document.createElement("br"))
            }
            //////////////////////////////////////////////
        }
    }
}