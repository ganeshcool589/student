import namor from 'namor';

const range = (len: number) => {
  const arr: any[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}


const newPerson = () => {
  const statusChance = Math.random();

  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    // email: 'test@honeywell.com',
    street: '2501 ohio drive',
    city: 'Atlanta',
    phone: Math.floor(2140000000 + Math.random() * 100000000),
    gpa: 'round down'
  }
}

export default function makeData(len: number) {
  const makeDataLevel = () => {
    return range(len).map(d => {
      return {
        ...newPerson()
      }
    })
  }

  return makeDataLevel()
}
