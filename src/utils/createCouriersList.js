
export const createCouriersList = (couriers) => {
    return couriers.map((item, index) => (
        {
            key: index,
            courier: item.name,
            price: item.price,
        }
    ));
};