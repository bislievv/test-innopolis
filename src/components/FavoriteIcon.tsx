import React from 'react';

interface FavoriteIconProps {
    isFavorite?: boolean
    size: string,
    onClick: (event: React.MouseEvent) => void;
}

const FavoriteIcon = ({ isFavorite = false, size, onClick }: FavoriteIconProps) => {
    const iconStyles = { cursor: "pointer", fontSize: `${size}` };

    return (
        <i
            className={`pi ${isFavorite ? "pi-star-fill" : "pi-star"}`}
            style={iconStyles}
            onClick={onClick}
        />
    );
};

export default FavoriteIcon;
