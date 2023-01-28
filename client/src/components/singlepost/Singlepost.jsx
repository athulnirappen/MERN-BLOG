import './singlepost.css'

const Singlepost = () => {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          className="singlepostimg"
          src="https://images.pexels.com/photos/14443587/pexels-photo-14443587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <h1 className="singleposttitle">
          lorem koluy
          <div className="singlepostedit">
            <i class=" singleposticon far fa-edit"></i>
            <i class=" singleposticon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>Athul</b>
          </span>
          <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className='singlepostdescription'>
          Praesent in pulvinar diam, at efficitur purus. Donec non ornare dui,
          in volutpat lacus. Pellentesque at ornare lorem. Maecenas hendrerit
          leo nec mi auctor molestie. Nullam vitae consectetur mauris. Fusce
          sodales ut ex et tempor. Donec maximus mauris libero, id imperdiet
          nisi hendrerit lacinia. Vivamus vestibulum porttitor lectus vel
          dapibus. Vivamus nec ultrices odio. Curabitur purus ligula, congue ac
          leo ac, eleifend pellentesque mi. Proin consectetur imperdiet ligula.
          Nunc condimentum justo bibendum fringilla eleifend. Nam finibus orci
          quis neque cursus facilisisPraesent in pulvinar diam, at efficitur
          purus. Donec non ornare dui, in volutpat lacus. Pellentesque at ornare
          lorem. Maecenas hendrerit leo nec mi auctor molestie. Nullam vitae
          consectetur mauris. Fusce sodales ut ex et tempor. Donec maximus
          mauris libero, id imperdiet nisi hendrerit lacinia. Vivamus vestibulum
          porttitor lectus vel dapibus. Vivamus nec ultrices odio. Curabitur
          purus ligula, congue ac leo ac, eleifend pellentesque mi. Proin
          consectetur imperdiet ligula. Nunc condimentum justo bibendum
          fringilla eleifend. Nam finibus orci quis neque cursus
          facilisisPraesent in pulvinar diam, at efficitur purus. Donec non
          ornare dui, in volutpat lacus. Pellentesque at ornare lorem. Maecenas
          hendrerit leo nec mi auctor molestie. Nullam vitae consectetur mauris.
          Fusce sodales ut ex et tempor. Donec maximus mauris libero, id
          imperdiet nisi hendrerit lacinia. Vivamus vestibulum porttitor lectus
          vel dapibus. Vivamus nec ultrices odio. Curabitur purus ligula, congue
          ac leo ac, eleifend pellentesque mi. Proin consectetur imperdiet
          ligula. Nunc condimentum justo bibendum fringilla eleifend. Nam
          finibus orci quis neque cursus facilisis
        </p>
      </div>
    </div>
  );
}

export default Singlepost
