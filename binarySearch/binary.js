/**
 * @file:binary.js
 * @module:Data Stracture
 * @author :BinarySearchTree <channabasavabml@gmail.com>
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const binary = require('./binaryBl')
// create an object for the BinarySearchTree
let BST = new binary.BinarySearchTree();
// Inserting nodes to the BinarySearchTree
BST.insert(15)
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
// Removing node with no children
BST.remove(5);
var root = BST.getRootNode();
// prints 7 9 10 13 15 17 22 25 27
BSt.inorder(root);
// Removing node with one children
BST.remove(7);
var root = BST.getRootNode();
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
// Removing node with two children
BST.remove(15);
var root = BST.getRootNode();
console.log("inorder traversal");
// prints 9 10 13 17 22 25 27
BST.inorder(root);
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
binary.BinarySearchTree()