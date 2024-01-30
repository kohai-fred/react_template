import "./Home.css";

const Home = () => {
  function copyCode(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    console.log("🆘 e", e.currentTarget.innerText);
    navigator.clipboard
      .writeText(e.currentTarget.innerText)
      .then(() => alert("text copied"));
  }

  return (
    <main>
      <h1>React Template</h1>
      <h2>Dependencies :</h2>
      <p>This app is a simple React Template who uses :</p>
      <ul>
        <li>Vite</li>
        <li>Typescript</li>
        <li>React hook form</li>
        <li>React router dom</li>
        <li>React query</li>
        <li>Eslint</li>
        <li>Prettier</li>
      </ul>
      <article>
        <h2>TIPS :</h2>
        <h3>npm-check-updates: </h3>
        <p>
          This packages verify and simplify your dependencies updates. You can
          find the all versions package here and take the last one :&nbsp;
          <a
            href="https://www.npmjs.com/package/npm-check-updates/v/16.14.11?activeTab=versions"
            target="blank"
          >
            all versions
          </a>
        </p>
        <ul>
          <li>
            Globally install :
            <code onClick={(e) => copyCode(e)}>
              npm install -g npm-check-updates
            </code>
            then use it with <code>ncu &#60;your command&#62; </code>
            <br />
          </li>
          <li>
            OR just execute :
            <code onClick={(e) => copyCode(e)}>npx npm-check-updates</code>
            then add your command after.
          </li>
        </ul>
        <p>In your console :</p>
        <ul>
          <li>
            <code>ncu</code> you have a list of your outdated packages. You have
            3 differents colors, <span style={{ color: "cyan" }}>PATCH</span> ,
            <span style={{ color: "lightgreen" }}>MINOR</span> ,
            <span style={{ color: "firebrick" }}>MAJOR</span>
          </li>
          <li>
            <code>ncu -u</code> : update all dependencies. You can specify a
            version like <code>ncu -u -t patch</code> (-t for target) and update
            only patch.
          </li>
          <li>
            {" "}
            <code>ncu -u -i</code> and you can interactive update. For a truly
            luxe experience add "--format group" and you have 3 separates blocks{" "}
            <code>ncu -u -i --format group</code>.
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Home;
