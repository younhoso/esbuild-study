export interface Animal {
	sound: string
}

class AnimalSound implements Animal {
  constructor(public sound: string) {
    this.sound = sound
  }

  Bark() {
    console.log(this.sound + '!')
  }
}

export class Dog extends AnimalSound {
  constructor() {
    super('멍멍')
  }
}