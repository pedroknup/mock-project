export const get_average_body_mass_index = (people) => {
    try {
        const total_body_mass_index = people.reduce((total, person) => {
            console.log('person: ', person);
            const body_mass_index = person.weight / (person.height * person.height);
            console.log('body mass indexx: ', body_mass_index);
            return total + body_mass_index;
        }, 0);

        console.log('testing')

        return total_body_mass_index / people.length;
    } catch (error) {
        console.log('It was not possible to calculate the average body mass index');
        return error;
    }
}

