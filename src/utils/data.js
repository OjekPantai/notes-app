const getInitialData = () => [
  {
    id: 1,
    title: "Test judul ke satu",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, enim officiis labore quos aliquid, repellendus sed nostrum itaque et nisi eum qui praesentium consectetur modi iusto a assumenda est. Dolorem doloremque expedita repellat error sunt ab voluptate veniam, corrupti est neque, at hic vero cum! Corporis aspernatur consequuntur aperiam neque.",
    createdAt: "2023-10-27T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Test judul ke dua",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, enim officiis labore quos aliquid, repellendus sed nostrum itaque et nisi eum qui praesentium consectetur modi iusto a assumenda est. Dolorem doloremque expedita repellat error sunt ab voluptate veniam, corrupti est neque, at hic vero cum! Corporis aspernatur consequuntur aperiam neque.",
    createdAt: "2023-10-27T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Test judul ke tiga",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, enim officiis labore quos aliquid, repellendus sed nostrum itaque et nisi eum qui praesentium consectetur modi iusto a assumenda est. Dolorem doloremque expedita repellat error sunt ab voluptate veniam, corrupti est neque, at hic vero cum! Corporis aspernatur consequuntur aperiam neque.",
    createdAt: "2023-10-27T04:27:34.572Z",
    archived: true,
  },
  {
    id: 4,
    title: "Test judul ke empat",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, enim officiis labore quos aliquid, repellendus sed nostrum itaque et nisi eum qui praesentium consectetur modi iusto a assumenda est. Dolorem doloremque expedita repellat error sunt ab voluptate veniam, corrupti est neque, at hic vero cum! Corporis aspernatur consequuntur aperiam neque.",
    createdAt: "2023-10-27T04:27:34.572Z",
    archived: true,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
