var domainname = '29tringuyen.000webhostapp.com'

function CheckforURL (chosenlink) {
    let currentLink = ''
    /*
    if (location.hostname === domainname) {
        //console.log("This is a domain")
        currentLink = domainname + chosenlink
    } else {
        //console.log("This is a private file")
        currentLink = 'D:/PreArchiveStorage/29_tringuyen%20Website/' + chosenlink
    }
    */

    if (window.location.protocol == "file:") {
        currentLink = 'D:/PreArchiveStorage/29_tringuyen%20Website/' + chosenlink
    }
    else {
        console.log(window.location.protocol)
        currentLink = window.location.protocol + "//" + window.location.hostname + "/" + chosenlink
    }
    return currentLink
}

function DetermineWebType(chosenlink, comefrom) {
    if (comefrom == "parent") {
        window.parent.location.href = CheckforURL(chosenlink)
    } else {
        window.location.href = CheckforURL(chosenlink)
    }
    console.log(location.hostname)
    console.log(CheckforURL(chosenlink))
    
}

function OnClick_ofbuttonofNews (link) {
    let currentLinkofNews = CheckforURL("sections/blog/")
    window.location.href = currentLinkofNews + link + ".html"
}

function SetupCopyright29TriNguyenFooter() {
    //Find div with the ID named "29TriNguyenCopyrightFooter

    const copyrightdiv = document.getElementById("29TriNguyenCopyrightFooter")

    const datetime = new Date()

    let month = datetime.getMonth()
    let day = datetime.getDay()

    if (copyrightdiv.className == "29TriNguyenCopyrightFooterClass") {
        copyrightdiv.appendChild(document.createElement("hr"))

        const copyrightext = document.createElement("p")
        copyrightext.style.textAlign = "center"
        copyrightext.innerHTML = "Trí Nguyên - 29_tringuyen ©: 2016-" + datetime.getFullYear() + " (" + parseFloat((datetime - new Date(2016, 6, 29)) / 3.154e+10).toFixed(2) + " năm)"
        copyrightdiv.appendChild(copyrightext)

        /*
        const allrightreservedtext = document.createElement("p")
        allrightreservedtext.style.textAlign = "center"
        allrightreservedtext.style.fontStyle = "Italic"
        allrightreservedtext.innerHTML = "~ All rights reserved ~"
        copyrightdiv.appendChild(allrightreservedtext)
        */

        copyrightdiv.appendChild(document.createElement("hr"))
    }
    

    console.log("The page contains " + copyrightdiv.length + " copyright footers!")

}

function RomanizeNumber(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

{
    /*
    INSTRUCTION:
    
    <!DOCTYPE html>
    <html>
    <head>
    <script type="text/javascript" src="../js/module.js"></script>
    <link rel="stylesheet" href="../css/Cssconfigmain.css">
    </head>
    <body>
    <div class="menu-bar">
        <menusize>
            <parali><a>Phần điều hướng</a>
                <div class="sub-menu-phandieuhuong">
                    <menusize>
                        <parali><a target="_parent" onclick = 'DetermineWebType("sections/TheTNProductionArchive.html","parent")'>Lưu trữ của The TN. Production</a></parali><hr>
                        <parali><a target="_parent" onclick = 'DetermineWebType("sections/CauChuyenStoryIntroduction.html","parent")'>Những câu chuyện/kể chuyện của Nguyễn Trí Nguyên</a></parali><hr>
                        <parali><a target="_parent" onclick = 'DetermineWebType("sections/29tringuyenArchive.html","parent")'>Thư viện và Tài liệu của 29tringuyen</a></parali>
                    </menusize>
                </div>
            </parali>
            <parali><a target="_parent" onclick="DetermineWebType('hub/cacdanhmuc.html','parent')">Những trang đặc biệt</a>
            </parali>
            <parali><a target="_parent" onclick="DetermineWebType('hub/blog.html','parent')">Blog</a>
            </parali>
        </menusize>
    </div>
    </body>
    </html>
    */
}

function LoadMenuBar() {
    const menuDiv = document.getElementById("29TriNguyenWebMenu")

    if (menuDiv.className == "menu-bar") {
        //Create css Link
        const csslink = document.createElement("link")
        csslink.rel = "stylesheet"
        csslink.href = "../static/css/Cssconfigmain.css"
        document.head.appendChild(csslink)

        //Menu Frame
        const menuframe = document.createElement("menusize")
        menuDiv.appendChild(menuframe)

        //Parali
        const parali = document.createElement("parali")
        menuframe.appendChild(parali)

        const parali_section1 = document.createElement("a")
        parali_section1.innerHTML = "Phần điều hướng"
        parali.appendChild(parali_section1)

        const subDivParali1 = document.createElement("div")
        subDivParali1.className = "sub-menu-phandieuhuong"
        parali_section1.appendChild(subDivParali1)

        const pdh_selectionframe = document.createElement("menusize")
        subDivParali1.appendChild(pdh_selectionframe)

        {
            const section1_paralilist_1 = document.createElement("parali")
            {
                const section1_paralilist_link = document.createElement("a")
                section1_paralilist_link.onclick = function () {
                    DetermineWebType('sections/TheTNProductionArchive.html')
                }
                section1_paralilist_link.innerHTML = "Lưu trữ của The TN. Production"
                //section1_paralilist_link.target = "_parent"

                pdh_selectionframe.appendChild(section1_paralilist_link)
                pdh_selectionframe.appendChild(document.createElement("hr"))
            }
            const section1_paralilist_2 = document.createElement("parali")
            {
                const section1_paralilist_link = document.createElement("a")
                section1_paralilist_link.onclick = function () {
                    DetermineWebType('sections/29tringuyenStoryIntr.html')
                }
                section1_paralilist_link.innerHTML = "Những câu chuyện/kể chuyện của 29_tringuyen"
                //section1_paralilist_link.target = "_parent"

                pdh_selectionframe.appendChild(section1_paralilist_link)
                pdh_selectionframe.appendChild(document.createElement("hr"))
            }
            const section1_paralilist_3 = document.createElement("parali")
            {
                const section1_paralilist_link = document.createElement("a")
                section1_paralilist_link.onclick = function () {
                    DetermineWebType('sections/29tringuyenArchiveCategoryList.html')
                }

                section1_paralilist_link.innerHTML = "Thư viện và Tài liệu của 29tringuyen"
                //section1_paralilist_link.target = "_parent"

                pdh_selectionframe.appendChild(section1_paralilist_link)
                pdh_selectionframe.appendChild(document.createElement("hr"))
            }
        }

        const parali2 = document.createElement("parali")
        menuframe.appendChild(parali2)

        const parali_section2a = document.createElement("a")
        parali_section2a.innerHTML = "Những trang đặc biệt"
        parali_section2a.onclick = function () {
            DetermineWebType('hub/cacdanhmuc.html', 'parent')
        }
        parali2.appendChild(parali_section2a)

        const parali3 = document.createElement("parali")
        menuframe.appendChild(parali3)

        const parali_section3a = document.createElement("a")
        parali_section3a.innerHTML = "Blog"
        parali_section3a.onclick = function () {
            DetermineWebType('hub/blog.html', 'parent')
        };
        parali3.appendChild(parali_section3a)

    }
}