import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { DragabbleImageProps } from "../../../typings/detail.type";

function DragabbleImage({ preview, index }: DragabbleImageProps) {
  return (
    <Draggable key={preview} draggableId={preview} index={index}>
      {(provided) => (
        <StAvatarPreviewBox
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StAvatarPreview key={preview} src={preview} alt="Image" />
        </StAvatarPreviewBox>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleImage);

const StAvatarPreviewBox = styled.div`
  display: flex;
  position: relative;
`;
const StAvatarPreview = styled.img`
  width: 100px;
  height: 100px;
  background-color: transparent;
`;
