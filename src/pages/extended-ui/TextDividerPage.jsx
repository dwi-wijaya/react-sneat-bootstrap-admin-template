import React from 'react'
import TextDivider from '../../components/atoms/TextDivider';

export const TextDividerPage = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4">
        <span className="text-muted fw-light">Extended UI /</span> Text Divider
      </h4>

      <div className="row">
        {/* Basic */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <h5 className="card-header">Basic</h5>
            <div className="card-body">
              <TextDivider text="Text" />
            </div>
          </div>
        </div>
        {/* /Basic */}

        {/* Text Alignment */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <h5 className="card-header">Alignment</h5>
            <div className="card-body">
              <TextDivider text="Start" alignment="start" />
              <TextDivider text="Start-Center" alignment="start-center" />
              <TextDivider text="Center (Default)" />
              <TextDivider text="End-Center" alignment="end-center" />
              <TextDivider text="End" alignment="end" />
            </div>
          </div>
        </div>
        {/* /Text Alignment */}

        {/* Divider Colors */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <h5 className="card-header">Colors</h5>
            <div className="card-body">
              <TextDivider text="Primary" color="primary" />
              <TextDivider text="Success" color="success" />
              <TextDivider text="Danger" color="danger" />
              <TextDivider text="Warning" color="warning" />
              <TextDivider text="Info" color="info" />
              <TextDivider text="Dark" color="dark" />
            </div>
          </div>
        </div>
        {/* /Divider Colors */}

        {/* Icons */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <h5 className="card-header">Icons</h5>
            <div className="card-body">
              <TextDivider icon="bx-sun" alignment="start" />
              <TextDivider icon="bx-crown" alignment="start-center" />
              <TextDivider icon="bx-star" alignment="center" />
              <TextDivider icon="bx-coffee-togo" alignment="end-center" />
              <TextDivider icon="bx-cut bx-rotate-180" alignment="end" />
              {/* Add more TextDivider components with icons */}
            </div>
          </div>
        </div>
        {/* /Icons */}

        {/* Styles */}
        <div className="col-md-12">
          <div className="card">
            <h5 className="card-header">Styles</h5>
            <div className="card-body">
              <TextDivider text="Solid (Default)" />
              <TextDivider text="Dotted" style="dotted" />
              <TextDivider text="Dashed" style="dashed" />
            </div>
          </div>
        </div>
        {/* /Styles */}
      </div>
    </div>
  );
};

