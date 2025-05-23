// Chessboard component
// This component renders a chessboard using Material-UI Grid
// I knew I needed to use REACT functionality to create this as a component to create a board, rather than using grid manually 64 times over. I also knew that I would need nested for loops in order to create the 8x8 grid. Inline Copilot helped me write the logic more efficientely. However, it did make the logic a bit more complex than need be, trying to create a rows, columns, and board arrays and parse into another. I trimmed this down into its current form. 

import React from 'react';
import { Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const ChessBoard = () => {

    // Logic to make the pieces seperate from the board itself
    function initializeBoard() {
        const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 8; j++) {
                initialBoard[i][j] = 'green';
            }
        }

        for (let i = 6; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                initialBoard[i][j] = 'blue';
            }
        }

        return initialBoard;
    }

    // Function to render the chessboard
    const renderBoard = () => {
        const square = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const isBlackSquare = (i + j) % 2 === 0;
                if (i < 2) {
                    square.push(
                        <Grid 
                        item 
                        key={`${i}-${j}`} 
                        sx={{
                            outline: '1px solid black',
                            backgroundColor: isBlackSquare ? 'black' : 'white',
                            width: 60,
                            height: 60,
                        }}
                        >
                            <CircleIcon 
                                sx={{
                                    color: 'green'
                                }}
                            />
                        </Grid>
                    );
                } else if (i > 5) {
                    square.push(
                        <Grid 
                        item 
                        key={`${i}-${j}`} 
                        sx={{
                            outline: '1px solid black',
                            backgroundColor: isBlackSquare ? 'black' : 'white',
                            width: 60,
                            height: 60,
                        }}
                        >
                            <CircleIcon 
                                sx={{
                                    color: 'blue'
                                }}
                            />
                        </Grid>
                    );
                } else {
                    square.push(
                        <Grid 
                        item 
                        key={`${i}-${j}`} 
                        sx={{
                            outline: '1px solid black',
                            backgroundColor: isBlackSquare ? 'black' : 'white',
                            width: 60,
                            height: 60,
                        }}
                        />
                    );
                }
            }
        }
        return square;
    }

    return (

        <>
            <Grid 
                container 
                sx={{
                    width: 480,
                    height: 480,
                    margin: '0 auto',
                }}
            >
                {renderBoard()}
            </Grid>
        </>

    );
}

export default ChessBoard;