import { SongData } from "../songdata";

const SongList = (props) => {
  return (
    <section className="song-list">
      <h4>Songs List</h4>
      <table className="playlist">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Title</th>
            <th>Song Length</th>
            <th>Singer</th>
          </tr>
        </thead>
        <tbody>
          {SongData.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.movie}</td>
                <td>{element.title}</td>
                <td>{element.length}</td>
                <td>{element.singer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
export default SongList;
