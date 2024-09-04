import { EditorJSONPreview } from './EditorJSONPreview';
import TipTap from './TipTap';

import { NavLink, Route, Routes } from 'react-router-dom';

import { Wall } from '@cosys-work/wall';

import { CollaborativeEditor } from '@cosys-work/optics';

export function App() {

  const activeLinkClass = "underline underline-offset-4 decoration-2";
  const pendingLinkClass = "pending";

  return (
    <div>
      <br />
      <div role="navigation">
        <ul className='flex flex-row gap-8 justify-around'>
          <li>
            <NavLink to="/"
            className={({ isActive, isPending }) => {
              return isActive ? activeLinkClass : isPending ? pendingLinkClass : "";
            }}
            >TipTap</NavLink>
          </li>
          <li>
            <NavLink to="/wall"
            className={({ isActive, isPending }) => {
              return isActive ? activeLinkClass : isPending ? pendingLinkClass : "";
            }}
            >Hybrid</NavLink>
          </li>
          <li>
            <NavLink to="/optics"
            className={({ isActive, isPending }) => {
              return isActive ? activeLinkClass : isPending ? pendingLinkClass : "";
            }}
            >ProseMirror</NavLink>
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TipTap />
              <EditorJSONPreview />
            </div>
          }
        />
        <Route path="/optics" element={<CollaborativeEditor />} />
        <Route path="/wall" element={<Wall />} />

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
