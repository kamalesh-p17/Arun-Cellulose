import React from "react";
import "./Process.css";
import v1 from "../../assets/v1.mp4"

const Process = () => {
  return (
    <section className="process-section" id="process">

      <div className="process-container">

        {/* LEFT SIDE - VIDEO */}
        <div className="process-video">
          <video
            src={v1}
            controls
            autoPlay
            muted
            loop
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="process-content">
          <h2>Our Process</h2>

          <p>
            The feedstock of agro-based materials, cotton rags and packaging
            industrial waste are sorted and granulised through the shredding machine.
          </p>

          <p>
            The shredded material goes through a series of wetting and fermentation
            processes to produce pure cellulose.
          </p>

          <p>
            The cellulose pulp is then fed through a conveyor system and pressed
            through rollers forming sheets of paper board. The board thickness is
            maintained by controlling the space between the rollers.
          </p>

          <p>
            Finished paper boards are laid one on top of the other to remove
            moisture content by hydraulic press.
          </p>

          <p>
            Each paper board is dried completely under sunlight.
          </p>

          <p>
            Once dried, boards are sorted based on size and go through calendaring,
            quality control, edge cutting and finally packing.
          </p>

          <p>
            The paper is dried naturally under the sun, eliminating the need for
            mechanical heating and significantly reducing carbon emissions.
          </p>

          <p>
            All production takes place in a facility powered entirely by solar energy,
            making ACI’s paper production energy-efficient, clean, and circular.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Process;
