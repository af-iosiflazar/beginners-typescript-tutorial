type Dog = {
  type: "dog";
  fourMembers: string;
  tail: string;
};

type Human = {
  type: "human";
  fourMembers: string;
  abstractThinking: string;
};

//
//
//
//
//
//
// Union type
// union of types means intersection of properties

type Mammal = Dog | Human;

function Union(m: Mammal) {
  if (m.type === "dog") {
    m.abstractThinking;
    m.fourMembers;
    m.tail;
    return;
  }

  m.abstractThinking;
  m.fourMembers;
  m.tail;
}

//
//
//
//
//
//
// Intersection type
// intersection of types means union of properties

type HumanDogHybrid = Dog & Human;

function name(h: HumanDogHybrid) {
  h.abstractThinking;
  h.fourMembers;
  h.tail;
}
