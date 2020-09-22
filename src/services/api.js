export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar seção 01 curso React UI",
          labels: ["#00897b"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
        {
          id: 2,
          content: "Estudar seção 02 curso React UI",
          labels: ["#00897b"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
        {
          id: 3,
          content: "Estudar seção 01 curso React Native",
          labels: ["#00897b"],
          user: "https://api.adorable.io/avatars/60/ipsum@adorable.png",
        },
        {
          id: 4,
          content: "Estudar seção 02 curso Flutter",
          labels: ["#681ff7"],
          user: "https://api.adorable.io/avatars/60/ipsum@adorable.png",
        },
        {
          id: 5,
          content: "Exercícios curso Swift",
          labels: ["#681ff7"],
          user: "https://api.adorable.io/avatars/60/doloramet@adorable.png",
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Fazer UI SimpleKanban - baseado no Pipefy",
          labels: [],
          user: "https://api.adorable.io/avatars/60/pokeon@adorable.png",
        },
        {
          id: 7,
          content: "Ouvir áudios binaurais enquanto programa",
          labels: ["#00897b"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 8,
          content: "Realizar testes nos projetos",
          labels: ["#681ff7"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
        {
          id: 9,
          content: "Escrever testes unitários Projeto XYZ",
          labels: ["#681ff7"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Decidir o que estudar",
          labels: [],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
        {
          id: 12,
          content: "Montar cronograma de estudos",
          labels: ["#681ff7"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
        {
          id: 13,
          content: "Fazer provas da faculdade",
          labels: ["#00897b"],
          user: "https://api.adorable.io/avatars/60/lorem@adorable.png",
        },
      ],
    },
  ];
}
