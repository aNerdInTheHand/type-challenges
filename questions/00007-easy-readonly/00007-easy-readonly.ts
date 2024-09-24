// ============= Test Cases =============
import type { Equal, Expect } from '../00013-warm-hello-world/test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
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

type MyReadonlyVerbose<TodoObject> = {
  readonly [Property in keyof TodoObject]: TodoObject[Property]
}