// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<ReadonlyTodo1>, Readonly<ReadonlyTodo1>>>,
]

interface ReadonlyTodo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

/**
 * Usage:
 */
let myReadOnly: MyReadonly<{title: string}> = {
  title: "Bort"
}

// @ts-expect-error(2540) Cannot assign to 'title' because it is a read-only property.
myReadOnly.title = "Brot"

