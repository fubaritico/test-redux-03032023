export type SetOffsetPayload = {
  offset: number
}

export type SetPagePayload = SetOffsetPayload & {
  page: number
}

export type PaginationState = SetPagePayload & {
  startIndex: number
  endIndex: number
  totalItems: number
  pages: number
}
