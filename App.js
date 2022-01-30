const quiz = [
    {
        question : "丹羽唯真が一番就職したい業界は?",
        answers:[
            "不動産",
            "営業系",
            "IT業界",
            "メーカー系"
        ],
        correct: "IT業界"
    },
    {
        question : "丹羽唯真の大学は?",
        answers:[
            "愛知大学",
            "名城大学",
            "中京大学",
            "南山大学"
        ],
        correct: "名城大学"
    },
    {
        question : "一番できるプログラミング言語は?",
        answers:[
            "Ruby",
            "Javascript",
            "Python",
            "PHP"
        ],
        correct: "Javascript"
    }
];

const  quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;




//DOM要素の変更


const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex ++;
        }
    
}

setupQuiz();


//正誤判定
const clickHandler = (e) => {
    if(e.target.textContent === quiz[quizIndex].correct){
        window.alert("正解");
    }else{
        window.alert("不正解");
    }

    quizIndex ++;
    
        if(quizIndex < quizLength){
            setupQuiz();
        }else{
            window.alert("これで終了です");
        }
        
    
}

let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handleIndex ++;
}
