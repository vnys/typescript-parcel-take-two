import * as React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

export function Hello(props: HelloProps) {
  return (
    <h1>
      Hellu from {props.compiler} and {props.framework}!
    </h1>
  )
}
