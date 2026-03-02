const qnaData = [{
        "id": 1,
        "question": "면접 형식이 어떻게 되나요?",
        "answer": "면접은 소규모 그룹 면접으로 진행됩니다. 전공 지식보다는 지원 동기와 열정을 위주로 보며, 편안한 분위기 속에서 자유롭게 이야기를 나누는 자리예요. 너무 긴장하지 않아도 됩니다!" // ← 답변 수정
    },
    {
        "id": 2,
        "question": "토퍼 면접 잘 보는 꿀팁이 있을까요?",
        "answer": "전공 질문은 가볍게 진행하니 너무 긴장하지 않으셔도 됩니다! 무엇보다 자신감 있는 말투와 또박또박한 답변이 면접관의 눈길을 끄는 포인트랍니다. 당당하고 활기찬 모습으로 본인만의 에너지를 보여주신다면 훨씬 매력적으로 다가올 겁니다 :)" // ← 답변 수정
    },
    {
        "id": 3,
        "question": "코딩 잘 못하는데 괜찮을까요?",
        "answer": "아직 1학년인 것을 감안하여 당장의 개발 실력보다는 '배우려는 의지'와 '소통 능력'을 가장 높게 평가합니다. 열심히 하겠다는 열정을 가지고 있다면 충분히 가능합니다 :)" // ← 답변 수정
    },
    {
        "id": 4,
        "question": "동아리 내 분위기가 어떤가요?",
        "answer": "선후배 간에는 서로 존중하는 예의가 있고, 동기들끼리는 소외 없이 다 같이 친한 깔끔한 분위기입니다 :D 모두와 편하게 어울리고 즐겁게 활동할 수 있는 동아리라고 장담합니다!" // ← 답변 수정
    }

];

function loadQna(data, containerId) {
    const container = document.getElementById(containerId);

    data.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'qna_card';

        card.innerHTML = `
            <div class="qna_question">
                <p class="qna_q_label">Q.</p>
                <p class="qna_q_text">${item.question}</p>
            </div>
            <p class="qna_answer">${item.answer}</p>
        `;

        container.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadQna(qnaData, 'qna_list');
});