import Logo from "Assets/Images/logo.png";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-32 h-[100vh]">
            <div className="h-48 w-48">
                <img 
                    className="h-full w-full rounded-full"
                    alt="logo"
                    src = {Logo}
                />
            </div>

            <div className="flex justify-around items-center gap-16 text-3xl">
                <div className="w-2/4 text-center font-semibold basis-1/2">
                    <h1 className="text-white text-5xl tracking-wide leading-normal">
                        BookShelf
                        <br />
                        <span className="text-warning">
                            Your personal library and social network for book lovers.
                        </span>
                    </h1>
                </div>

                <div >
                    <button className="btn btn-primary rounded-md px-5 py-2 text-xl bg-primary">Register</button>
                    <button className="btn btn-warning rounded-md mx-3 px-5 py-2 text-xl bg-warning text-black">Login</button>
                </div>
            </div>
        </div>
    );
}
export default Home;