import tw from 'tailwind-styled-components';

const StyledWall = tw.div`
  bg-slate-800;
`;

export function Wall() {
  return (
    <StyledWall>
      <h1>Welcome to Wall!</h1>
    </StyledWall>
  );
}

export default Wall;
