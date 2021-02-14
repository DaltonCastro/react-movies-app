export function getPieceOfState(piece, action, state) {
  return { ...state, [piece]: action.payload };
}
