import React from "react";
import "./ShoppingCart.css";
import { FormControl } from "react-bootstrap";

const ShoppingCart = () => {
  return (
    <div>
      <h1 className="title">
        Shopping Cart<sup>(1 item in your basket)</sup>
      </h1>
      <div className="box">
        <div className="details-box">
          <div className="img-text-box">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAwwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAgMEBQj/xAA8EAABAwIEAgcFBgUFAQAAAAABAAIDBBEFEiExBkETUWFxgZGxBxQiMsEjNEJSoeEzYnPR8RVTcoKSJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EAB0RAQACAwEBAQEAAAAAAAAAAAABAgMRITESMjP/2gAMAwEAAhEDEQA/ALhQmhSqSEFCATQhAkk0IEhNCDFCxqJoqaIyzysjjG7nusB4leW3ijA3khmJQvtuW3I87KNxCdS9YpLmpMSoq0A01Sx99td11Js0SSaSlAWBWZWCBFCaVkAdliVkkgxWQCLLJEsCNULNCgdCEIUoCEIQCEIQCSaECXPiFZHQUclTL8rBoBu48gF0qH8WVrpqoUsWojNgL7uP9r38FS9vmF6V3KAceY5LLIyTEnyue83igYfgjHdsSolT1dUZA+GSXLfa/wCqnNHg0XEXGXRVAzUtDTglv5nE/sVOjw5hkTgW0sWgtbLouH1xp+YUrT43U00pcXmMG5IAIuey23Wri9nPE7sfw4w1Ts9XABd3NzdgT2+q8niHAqCoYWtpo22/K21lDsDqJ+E+JoJY8xpi7JI0fjadx9fBTTJ1XJi4vVJDSHAEbHUIK0sxFYplJEEhNCDFCaECCyQ3dBQJCEIOhNJNAihCaBITQgEIQiSNraqBVbT77UVD/mIJ16yp3I4NieTsGnVV3itSHUk7xoZDkBHVZcM0u2GHFwrVQYZjtZLUGQ9NTxuaGRlxOp6gptDXRVNP08WbJa9nNsR3hVv/AKfU4pjcEFPUzQj3YseYjYm1v7lWDhOGigoTT9I+UuZZz3uuSuETxpmEQxfiWUTEE08MObIy7HSPf3AEALx8VgZimCzT07ukcBnY4synTsUswygo5Y5aWpjYXRuuDb5lyY2xsMU0VPZl4ngW5aHVRErzHE04XkMvD2HyF7n54GkOfuW8r9trL0iuPBIzFg1BE5uUtp4wR1HKF2Fbo8ebb3jEpBZFJSgJFZLEoBCE7IAIKEIMbITKEG9CEIBNJCBpIQgE0k0HJi0hiwype3foyB3nQeqrCqnaYzFcFpLSPO31VkcRhxwOsybiPN5KrmQ/bwS/hjje51+oEn6LLn9a8HjdguIOo8VlmDMxbLJGLdw/spdA+LEoBCJJ5aqM3c2Au+Bx5O5eBVdsqvdaYVTr5hI1xt18/wBVYuB1dPidK18crWyZQL8wFxie9aZ8R6vhdg08bIKScPldZgztv3nXQLTi8bmwVTpX5iIi3fm7QDzIXs4zHTUXxvnzuA0uQq9xfHH1uKMpIdKaJ7XvPOR2/kFMR1W1uL3prGnjsLDKNPBZlc2HyianbI0gte0PbbqIuulbo8edPrFCZSUoJCEckBZAQmgEFLmgoMU0kIOhCEIBCEIBCEIBNJNEtVS0Pp5GEXztLbd6rrEaMU/TxhtnPaYwP+2voVYNdXUlBCZq2oigjbrmkdb/ACovM2LiKnmq8N+CLOWRSOHzlu7rchfT9Vnz13G3fBbU6VdVBxpKiF175wQPH9lJeHoBNh8crHFsgFiWmyxxHA5GOOe3xPBe22x5+C7sLpTSulLXHI8BwZb8XM+Kx2nfG+PGitoS/MZC5wA5lQWopZKXE/kcekcC0gX1HJW5U0IkpSY/iLgFHavDW9MC8OYWm7XAbFWrM1c56kPs+xGrfA6jqIJOiY28MpabOF9RfsvspmqnfxBinCc8VS2c1lBKSySlkdo0k3zNO4PZtqpThvtI4erQ0Tyy0Uh/DOy7f/QuFuxTE1YcsaslxSWijrqSvj6WiqYZ2fmjeDZb10cghCECRdK9kc0DSKZS5IEhCEHQhJNAIQhAIQhAEgAkkADe6r3iTjmoE7qbBw1jLkCcjM51tyAdh5qR8a4iaHCDFGbS1TujFuTeZ+niqiqZLVcTmjQRn1/ZTCWvFKqqnMlRWTyTzZS7NI8uP6qY+y2uHSVeGyG+00bT5FQqqbcVoJzZWiPvOl/VdeG1r8HxmkrYR/DuHAfibzHkSq3ruE1nUrokgifvG3yXHUUEdwWNAsuqjqoa2ljqaZ4fFI3M1wW1xA3WSaxPrXFpeayLom7adS5p4myXGUeS9hzA9l7LzMSqabDaWWqrJGxwxC5cT5AdpOipNe8W+ld+0R7Y/c6FmUuuZnabAXA87/oooKe8bSDoV14nWyYris1bOCDM8lrfyNGjW+S1AjKWX0dcW7RstuOvzXTJe31ZjSuno5my0sz4XtNw+NxaQR3K2/Z5xYeIaJ9PWEe/04u53+629s3fyPgqkif0nxnm3VPhvFn4Bi9NiMZs2KT7QX3Zs4eV/IK8qPolJKORk0LJYzdj2hzTfcEXTKhBIQkgaSCkgaEkIOhAQhA0JIQNAST7kEA9odXnxOKlvcQ0+fxJ/YKuJnn32KE7h+Xwvf0KlHFVY2r4krZQSYw8xg/ygAeoUWqHAV9O46ODiHnt/wAKRvjZ0gqze/22vmFsrGZWUzupxCww4gOrB/MTdd9bDnombXBupG3AuI6/BHltPkkpr/FC86X6weRUoZ7RcNcz/wCqkq4nfyNDx6qAOsG7jwstJe1pu8eCpNIleLzCxZ/aLRthd7lh9TM8DeW0bfqVCMbxjEsenEuISN6NpvHAwWYzuHM9pXJTgyvBfowbN5Lonc22h7AkUiCbTLhsRLHl5NOlu1c8zujc87WkB8F3O+cE6gNsB5rza1wc6QDchWVKleWxlttL9a5xYx3O1jp5rZE8CI36lrp2l0AA1uALnkEkXZ7L8W/1LhWCGR15qL7B/WWj5D5eilpKqH2TjFIcac6mp5ZMOmYWVD7WY0j5SD1g3GnWreKgJJNIogFCCkgaFihB1IS5IQCEIQNJwzMIBsSLXHJNAQVdxFwJiUDH1FJNFUxg5rXyO179FDK3D8QopI319NJF9pZpe3cd+xV/1n3Z99jb1UM9oEAn4dc4D4opGPHp9SqTfVtOtabrtXWHi1RUDYE66cltxGsayFrBudAtdM8MNQ8k6M3XmzEviY82PwF3mujk2dN8Oouea0vIc64FkoB9l2pm9tQPBBkyTUBvctxlL7l2w61zNbrm7dlkPkfvbqQbHOzMvuOQXlSz5nxncP08V2QvJZlA17F5cwNpWc43Z2oluhgllkEMbgc5sHbWvorAwDhWno6yhNYW1YdI3Mxzfh7rc/FRLhaH3rFYABcN+N3hsrOHwTUh6pWeoWbJkmL6hpxY4mu5TpjGQsEcTGsY0WDWCwHZZBN03LFaGUXWKZKRQCEkE6IC6FhdCDsCaEIBCEIAJhNCDnxD7m7vCjHFOuAVl/yfVNCz3/cNOP8AEqkqiRRyWJ2WE33dv9JqELSzy1w/wihu47kIRDGL5j/xWUf0TQg5YPxdy45vvz+4eiSESkHs9++THnlCsWf+JT/1GeoQhYcn7bcf804O6RTQtrCxSQhAknbIQg1oQhB//9k="
              alt=""
            />

            <div className="text">
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              </h4>
              <h5>FINISH: STERLING SILVER</h5>
              <h5>LENGTH:18 INCHES</h5>
              <h6>
                <a>Edit</a>
              </h6>
              <p>Personalisation: Not requested on this term</p>
              <div className="button">
                <div className="btn-group">
                  <a className="btn btn-primary button">Save for Later</a>
                  <a className="btn btn-primary button">Remove</a>
                </div>
              </div>
            </div>
          </div>
          <div className="textarea">
            <textarea
              className="form-control"
              aria-label="With textarea"
              placeholder="Add a note to The Authentic Corner(optional)"
            ></textarea>
          </div>
        </div>
        <div className="money-box"></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
