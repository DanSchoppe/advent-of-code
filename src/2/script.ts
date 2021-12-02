import _ from 'lodash'

import { fileToLines } from '../common'

interface Position {
  posHorizontal: number
  depth: number
  product: number
}

// Part 1:
{
  const accumulateMovement = (
    commands: string[]
  ): Position => {
    let posHorizontal = 0
    let depth = 0
    const move = (line: string): void => {
      const [direction, magnitudeStr] = _.split(line, ' ')
      const magnitude = _.toInteger(magnitudeStr)
      switch (direction) {
        case 'forward':
          posHorizontal += magnitude
          break
        case 'down':
          depth += magnitude
          break
        case 'up':
          depth -= magnitude
          break
      }
    }

    _.forEach(commands, move)
    return {
      posHorizontal,
      depth,
      product: posHorizontal * depth
    }
  }

  const actual = accumulateMovement(fileToLines('src/2/sample.txt'))
  const expected = { posHorizontal: 15, depth: 10, product: 150 }
  if (!_.isEqual(actual, expected)) throw new Error('Failed part 1 sample test!')

  const answer = accumulateMovement(fileToLines('src/2/data.txt'))
  console.log('Part 1:', answer)
}

// Part 2:
{
  const accumulateMovement = (
    commands: string[]
  ): Position => {
    let posHorizontal = 0
    let depth = 0
    let aim = 0
    const move = (line: string): void => {
      const [direction, magnitudeStr] = _.split(line, ' ')
      const magnitude = _.toInteger(magnitudeStr)
      switch (direction) {
        case 'forward':
          posHorizontal += magnitude
          depth += aim * magnitude
          break
        case 'down':
          aim += magnitude
          break
        case 'up':
          aim -= magnitude
          break
      }
    }

    _.forEach(commands, move)
    return {
      posHorizontal,
      depth,
      product: posHorizontal * depth
    }
  }

  const actual = accumulateMovement(fileToLines('src/2/sample.txt'))
  const expected = { posHorizontal: 15, depth: 60, product: 900 }
  if (!_.isEqual(actual, expected)) throw new Error('Failed part 2 sample test!')

  const answer = accumulateMovement(fileToLines('src/2/data.txt'))
  console.log('Part 2:', answer)
}
