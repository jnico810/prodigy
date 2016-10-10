const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.50)',
    zIndex          : 10
  },
  content : {
    position        : 'absolute',
    width           : '480px',
    borderRadius    : '4px',
    left: '50%',
    top: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border          : '2px solid #444',
    backgroundColor : '#292929',
    zIndex          : 11,
    overflow: 'auto'
  }
};

export default ModalStyle;
