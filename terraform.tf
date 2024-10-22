# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Define variables for storage account name, location, and SKU
variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "location" {
  description = "Location for the storage account"
  type        = string
  default     = "East US"
}

variable "sku" {
  description = "The SKU of the storage account"
  type        = string
  default     = "Standard_LRS"
}

# Create the storage account resource
resource "azurerm_storage_account" "storage_account" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = var.sku

  # Optional: Enable advanced threat protection
  enable_https_traffic_only = true
}

# Create a resource group (if not already created)
resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = var.location
}