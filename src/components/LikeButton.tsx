import { forwardRef, useImperativeHandle, useRef } from "react";

export type LikeButtonHandle = {
  updateBgColor: () => void;
};

const LikeButton = forwardRef((props, ref) => {
  const _refLike = useRef<any>(null);

  useImperativeHandle(ref, () => {
    return {
      updateBgColor() {
        _refLike.current.setAttribute('style', 'background-color: red')
      },
      getNameInput() {
        return 'like button'
      },
      selection() {
        _refLike.current.select()
      }
    }
  })

  return (
    <button ref={_refLike} id="likeButton" type="button" {...props}>Like Button</button>
  )
})


export default LikeButton;