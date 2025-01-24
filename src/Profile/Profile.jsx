

const Profile = () => {
    return (
        <div>
            <h1></h1>
            <div className="hero bg-emerald-950 min-h-screen bg-[url('https://th.bing.com/th/id/OIP.Zl2ZafbKRI6QY0KTZjNDXQHaEJ?rs=1&pid=ImgDetMain')]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
      <p className="py-6 text-white">
        Login and search your product . if any problem please Contact with me!!
      </p>
    </div>
    <div className="card bg-sky-950 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Profile;