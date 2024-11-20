// Thay đổi nội dung búc thư ở đây
var letterContent =" Vì một trái tim nhiều lần đổ vỡ thì nó đã sợ đau và chưa hề đập mạnh lại lần nào, vô tình 1 bàn tay đã đấm vào nó để thúc đẩy nó đập mạnh hơn,lúc ấy nó nhận ra không hề đau như nó nghĩ. Có lần anh đã đem phiền phức tới em, em đã dang tay ra cứu rỗi anh dù biết đó là điều không cần thiết. Anh chưa từng nghĩ rằng bản thân sẽ dấn thân quá sâu vào dại dương này. Dù anh biết lúc trở gió sóng mạnh, lúc xanh dịu êm nước lặng. Cảm xúc của anh luôn có vậy và nó luôn thay đổi khi đại dương ấy trở dạng. Anh chưa hề từng rõ cảm xúc của em như nào, anh chưa hề rõ con người em ra sao, anh chưa hề biết mỗi lần đưa em đi chơi sẽ có hao không. Dù là vui tay gõ cho vài chữ, hay là sự thương hại, cũng có thể thật sự lúc đó em dao động. Anh đã gom đủ cả , mỗi  cái đó anh đều cảm ơn luôn trân trọng. Anh luôn nghĩ rằng bản thân sẽ được đáp lại nhưng rồi điều đó không quan trọng nữa. Anh có nghe 1 câu rằng  (cho tớ cơ hội tớ sẽ cho cậu hạnh phúc) , cũng đúng  nhưng có lẽ em đã hạnh phúc sẵn với lựa chọn đó của mình rồi. Còn riêng về anh nếu anh lựa chọn sai thì anh sẽ trả giá,bằng thanh xuân và niềm tin của anh còn nếu anh lựa chọn đúng thì cảm ơn em vì vẫn đã đón nhận nó."
// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 60

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})