import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.2rem;

  @media (min-width: 350px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ $appearGalleryItem }) => ($appearGalleryItem ? 1 : 0)};
  transform: ${({ $appearGalleryItem }) =>
    $appearGalleryItem ? 'translateY(0)' : 'translateY(40px)'};

  transition: opacity 0.6s cubic-bezier(0, 0, 0.25, 1), transform 0.4s cubic-bezier(0, 0, 0.25, 1);

  img,
  video {
    transition: all 0.3s ease-in-out !important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    ::after {
      opacity: 0.1;
    }

    img,
    video {
      transform: scale(1.05);
    }
  }

  @media (min-width: 652px) {
    height: 300px;

    div {
      position: static;
    }

    img,
    video {
      height: 100%;
    }

    video {
      object-fit: cover;
    }
  }
`;
