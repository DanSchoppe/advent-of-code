import _ from 'lodash'

import { fileToLines } from '../common'

// Part 1:
{
  const countIncreases = (
    depthStrings: string[]
  ): number => {
    const depths = _.map(depthStrings, _.toInteger)

    const increases = _.map(
      depths,
      (depth, index) => {
        // Skip first element, as there's nothing to compare to:
        if (index < 1) return false
        return _.toInteger(depth) > _.toInteger(depths[index - 1])
      }
    )
    return _.sum(increases)
  }

  const actual = countIncreases(fileToLines('src/1/sample.txt'))
  const expected = 7
  if (actual !== expected) throw new Error('Failed part 1 sample test!')

  const answer = countIncreases(fileToLines('src/1/data.txt'))
  console.log('Part 1:', answer)
}

// Part 2: Slide a window across input data
{
  const countWindowedIncreases = (
    depthStrings: string[]
  ): number => {
    const depths = _.map(depthStrings, _.toInteger)
    const windowSize = 3

    const increases = _.map(
      depths,
      (_depth, index) => {
        // Skip first element, as there's nothing to compare to:
        if (index < 1) return false

        const window = _.slice(depths, index, index + windowSize)
        // Skip last elements that don't have a full window:
        if (window.length < windowSize) return false

        const prevIndex = index - 1
        const prevWindow = _.slice(depths, prevIndex, prevIndex + 3)

        return _.sum(window) > _.sum(prevWindow)
      }
    )

    return _.sum(increases)
  }

  const actual = countWindowedIncreases(fileToLines('src/1/sample.txt'))
  const expected = 5
  if (actual !== expected) throw new Error('Failed sample test!')

  const answer = countWindowedIncreases(fileToLines('src/1/data.txt'))
  console.log('Part 2:', answer)
}
