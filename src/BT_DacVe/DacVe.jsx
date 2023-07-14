import React from "react";
import SoGhe from "./SoGhe";
import "./styles.css";
import ThanhToan from "./ThanhToan";

function DacVe() {
  return (
    <div>
      <h1>Movie Seat Selection</h1>
      <div className="container">
        <div className="w3ls-reg">
          <div className="inputForm">
            <h2>fill the required details below and select your seats</h2>

          </div>

          <ul class="seat_w3ls">
            <li>
              <span className="seat selected" /> Ghế Đã Chọn
            </li>

            <li>
              <span className="seat full" /> <small>Ghế Đã Đặt</small>
            </li>

            <li>
              <span className="seat" /> <small>Ghế Trống</small>
            </li>
          </ul>
          <div className="text-center">
            <div
              className="seatStructure txt-center"
              style={{ overflowX: "auto" }}
            >
              <div className="screen">
                <h2 className="wthree">Màn Hình</h2>
              </div>
              <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              <SoGhe />
            </div>
          </div>
          <div className="BanGia">
            <h2>danh sach ghế chọn</h2>
          </div>
          <ThanhToan />
        </div>
      </div>
    </div>
  );
}

export default DacVe;
