// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
type MyPick<
  T extends {},
  K extends keyof T
> = {
  [P in K]: T[P]
}

type MyPickVerbose<
  TodoObject extends {}, // must be an object
  Key extends keyof TodoObject // must be a key of TodoObject
> = {
  // for each key in Key, map to the corresponding
  // property type in TodoObject.
  // i.e. for each key in K, the new type
  // will have a property with the same
  // key and type as in TodoObject
  [Property in Key]: TodoObject[Property]
}

/**
 * Usage
 */
const todo1 : MyPick<{title: string, description: string}, "title"| "description"> = {
  title: "Bort",
  description: "Bort"
}

const todo2 : MyPick<{title: string, completed: boolean}, "title"| "completed"> = {
  title: "Bort",
  completed: true
}

// using interface
const todo3 : MyPick<Todo, "title" | "description" | "completed"> = {
  title: "Bort",
  description: "Bort",
  completed: false
}

// co-pilot explainer:
// In summary, MyPick is a custom utility type that
// allows you to create a new type by picking specific
// properties from an existing type.
// This can be particularly useful when you need to
// work with a subset of an object's properties
// while maintaining type safety.