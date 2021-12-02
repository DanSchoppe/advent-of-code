import { readFileSync } from 'fs'
import _ from 'lodash'

export function fileToLines (
  filename: string
): string[] {
  const lines: string[] = []
  readFileSync(filename, 'utf-8')
    .split(/\r?\n/)
    .forEach(line => !_.isEmpty(line) && lines.push(line))
  return lines
}
