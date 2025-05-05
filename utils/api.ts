export const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
  const data = await response.json();
  return data.results.map((item: any) => ({
    avatar: item.picture?.large,
    name: `${item.name.first} ${item.name.last}`,
    email: item.email,
    phone: item.phone,
    cell: item.cell,
    favorite: Math.random() < 0.3,
  }));
};

export const fetchUserContact = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
  const data = await response.json();
  return {
    avatar: data.results[0].picture.large,
    name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    phone: data.results[0].phone,
  };
};
