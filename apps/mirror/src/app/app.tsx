import { EditorJSONPreview } from './EditorJSONPreview';
import TipTap from './TipTap';

import { Link, Route, Routes } from 'react-router-dom';

import { Wall } from '@cosys-work/wall';

import { Optics } from '@cosys-work/optics';

export function App() {
  return (
    <div>
      <br />
      <div role="navigation">
        <ul className='flex flex-row gap-8 justify-around'>
          <li>
            <Link to="/">Default</Link>
          </li>
          <li>
            <Link to="/wall">Wall</Link>
          </li>
          <li>
            <Link to="/optics">Optics</Link>
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
        <Route path="/optics" element={<Optics />} />
        <Route path="/wall" element={<Wall />} />

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
